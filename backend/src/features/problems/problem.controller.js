import { listProblems, getAllTags, getProblemBySlug } from "./problem.service.js";

export async function getProblems(req, res, next) {
  try {
    const result = await listProblems({
      userId: req.user?._id,
      search: req.query.search,
      difficulty: req.query.difficulty,
      tag: req.query.tag,
      tags: req.query.tags,
      status: req.query.status,
      page: req.query.page,
      limit: req.query.limit,
    });

    return res.json({
      success: true,
      count: result.data.length,
      total: result.total,
      page: result.page,
      limit: result.limit,
      totalPages: result.totalPages,
      data: result.data,
    });
  } catch (error) {
    next(error);
  }
}

export async function getTags(req, res, next) {
  try {
    return res.json({ success: true, data: await getAllTags() });
  } catch (error) {
    next(error);
  }
}

export async function getProblemBySlugController(req, res, next) {
  try {
    const problem = await getProblemBySlug(req.params.slug, req.user?._id);
    if (!problem) return res.status(404).json({ success: false, message: "Problem not found" });
    return res.json({ success: true, data: problem });
  } catch (error) {
    next(error);
  }
}
