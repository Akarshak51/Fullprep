import Problem from '../../problems/problem.model.js';

// @desc    Create a new real problem
// @route   POST /api/admin/problems
// @access  Private/Admin
export const createProblem = async (req, res) => {
  try {
    const {
      title,
      slug,
      description,
      difficulty,
      tags,
      companies,
      constraints,
      examples,
      visibleTestCases,
      hiddenTestCases,
      editorial,
      aiPromptConfig
    } = req.body;

    const problemExists = await Problem.findOne({ slug });
    if (problemExists) {
      return res.status(400).json({ success: false, message: 'Problem with this slug already exists' });
    }

    const problem = await Problem.create({
      title,
      slug,
      description,
      difficulty,
      tags,
      companies,
      constraints,
      examples,
      visibleTestCases,
      hiddenTestCases,
      editorial,
      aiPromptConfig
    });

    res.status(201).json({ success: true, data: problem });
  } catch (error) {
    console.error('Error creating problem:', error);
    res.status(500).json({ success: false, message: 'Server Error while creating problem' });
  }
};

// @desc    Update an existing problem
// @route   PUT /api/admin/problems/:id
// @access  Private/Admin
export const updateProblem = async (req, res) => {
  try {
    let problem = await Problem.findById(req.params.id);

    if (!problem) {
      return res.status(404).json({ success: false, message: 'Problem not found' });
    }

    problem = await Problem.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({ success: true, data: problem });
  } catch (error) {
    console.error('Error updating problem:', error);
    res.status(500).json({ success: false, message: 'Server Error while updating problem' });
  }
};

// @desc    Delete a problem
// @route   DELETE /api/admin/problems/:id
// @access  Private/Admin
export const deleteProblem = async (req, res) => {
  try {
    const problem = await Problem.findById(req.params.id);

    if (!problem) {
      return res.status(404).json({ success: false, message: 'Problem not found' });
    }

    await problem.deleteOne();

    res.status(200).json({ success: true, message: 'Problem deleted successfully' });
  } catch (error) {
    console.error('Error deleting problem:', error);
    res.status(500).json({ success: false, message: 'Server Error while deleting problem' });
  }
};