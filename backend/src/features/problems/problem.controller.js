import Problem from './problem.model.js';

// @desc    Get all problems (with pagination and basic filtering)
// @route   GET /api/problems
// @access  Public (or Private depending on your strictness)
export const getProblems = async (req, res) => {
  try {
    const { difficulty, tags, page = 1, limit = 10 } = req.query;
    
    // Build the query object dynamically
    let query = {};
    if (difficulty) query.difficulty = difficulty;
    if (tags) query.tags = { $in: tags.split(',') };

    // Calculate pagination skips
    const skip = (Number(page) - 1) * Number(limit);

    // Fetch problems, excluding sensitive data like hidden test cases and AI prompts
    const problems = await Problem.find(query)
      .select('-hiddenTestCases -aiPromptConfig -editorial')
      .skip(skip)
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    const total = await Problem.countDocuments(query);

    res.status(200).json({
      success: true,
      count: problems.length,
      total,
      page: Number(page),
      totalPages: Math.ceil(total / Number(limit)),
      data: problems
    });
  } catch (error) {
    console.error('Error fetching problems:', error);
    res.status(500).json({ success: false, message: 'Server Error while fetching problems' });
  }
};

// @desc    Get a single problem by Slug (for the coding arena)
// @route   GET /api/problems/:slug
// @access  Public
export const getProblemBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    
    // Fetch problem but hide the hidden test cases and AI prompts from the student
    const problem = await Problem.findOne({ slug })
      .select('-hiddenTestCases -aiPromptConfig');

    if (!problem) {
      return res.status(404).json({ success: false, message: 'Problem not found' });
    }

    res.status(200).json({ success: true, data: problem });
  } catch (error) {
    console.error('Error fetching problem details:', error);
    res.status(500).json({ success: false, message: 'Server Error while fetching problem details' });
  }
};