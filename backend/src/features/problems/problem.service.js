import Problem from "./problem.model.js";
import Submission from "../submissions/submission.model.js";
import { slugify } from "../../shared/utils/slugify.js";

function positiveInt(value, fallback, max) {
  const parsed = Number.parseInt(value, 10);

  if (!Number.isFinite(parsed) || parsed < 1) {
    return fallback;
  }

  return Math.min(parsed, max);
}

export async function listProblems({
  userId,
  search,
  difficulty,
  tag,
  tags,
  status,
  page = 1,
  limit = 20,
}) {
  const currentPage = positiveInt(page, 1, 100000);
  const pageSize = positiveInt(limit, 20, 100);

  const query = {
    isPublished: true,
  };

  // Difficulty filter
  if (difficulty && difficulty !== "All") {
    query.difficulty = difficulty;
  }

  // Single tag filter
  if (tag && tag !== "All") {
    query.tags = tag;
  }

  // Multiple tags filter
  if (tags) {
    const tagList = String(tags)
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean);

    if (tagList.length > 0) {
      query.tags = { $in: tagList };
    }
  }

  // Full-text search
  const trimmedSearch = search?.trim();

  if (trimmedSearch) {
    query.$text = {
      $search: trimmedSearch,
    };
  }

  // Solved / unsolved filter
  let solvedIds = new Set();

  if (userId && status && status !== "All") {
    const acceptedProblemIds = await Submission.find({
      userId,
      status: "Accepted",
    }).distinct("problemId");

    solvedIds = new Set(acceptedProblemIds.map(String));

    if (status === "Solved") {
      query._id = {
        $in: acceptedProblemIds,
      };
    }

    if (status === "Unsolved") {
      query._id = {
        $nin: acceptedProblemIds,
      };
    }
  }

  const skip = (currentPage - 1) * pageSize;

  const sort = trimmedSearch
    ? {
        score: { $meta: "textScore" },
        createdAt: -1,
      }
    : {
        createdAt: -1,
      };

  const [problems, total] = await Promise.all([
    Problem.find(query)
      .select(
        "title slug description difficulty tags companies acceptanceRate constraints examples starterCode createdAt",
      )
      .sort(sort)
      .skip(skip)
      .limit(pageSize)
      .lean(),

    Problem.countDocuments(query),
  ]);

  const data = problems.map((problem) => ({
    ...problem,
    id: problem._id,
    solved: solvedIds.has(String(problem._id)),
    isPremium: false,
  }));

  return {
    data,
    total,
    page: currentPage,
    limit: pageSize,
    totalPages: Math.ceil(total / pageSize),
  };
}

export async function getAllTags() {
  const tags = await Problem.distinct("tags", {
    isPublished: true,
  });

  return tags.filter(Boolean).sort((a, b) => a.localeCompare(b));
}

export async function getProblemBySlug(slug, userId) {
  const problem = await Problem.findOne({
    slug,
    isPublished: true,
  })
    .select("-hiddenTestCases -aiPromptConfig")
    .lean();

  if (!problem) {
    return null;
  }

  let solved = false;
  let submissionCount = 0;

  if (userId) {
    const [accepted, count] = await Promise.all([
      Submission.exists({
        userId,
        problemId: problem._id,
        status: "Accepted",
      }),

      Submission.countDocuments({
        userId,
        problemId: problem._id,
      }),
    ]);

    solved = Boolean(accepted);
    submissionCount = count;
  }

  return {
    ...problem,
    id: problem._id,
    statement: problem.description,
    solved,
    submissionCount,
    submissionCount: submissionCount,
    acceptedCount: 0,
    editorial: problem.editorial || "",
    starterCode: Object.fromEntries(Object.entries(problem.starterCode || {}).map(([k,v])=>[k.toLowerCase()==="c++"?"cpp":k.toLowerCase(),v])),
  };
}

export async function createProblem(payload) {
  const data = {
    ...payload,
  };

  if (!data.slug && data.title) {
    data.slug = slugify(data.title);
  }

  return Problem.create(data);
}

export async function updateProblem(id, payload) {
  return Problem.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
}

export async function deleteProblem(id) {
  return Problem.findByIdAndDelete(id);
}
