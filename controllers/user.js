const Users = require('../models/User');

// @desc    Get all user
// @route   GET /api/v1/user
// @access  Public
exports.getUser = async (req, res, next) => {
  try {
    const user = await Users.find();

    return res.status(200).json({
      success: true,
      count: user.length,
      data: user
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}

// @desc    Add user
// @route   POST /api/v1/user
// @access  Public
exports.addUser = async (req, res, next) => {
  try {
    const { name, status, profession, budget, income } = req.body;

    const user = await Users.create(req.body);
  
    return res.status(201).json({
      success: true,
      data: user
    }); 
  } catch (err) {
    if(err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);

      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
}

// @desc    Delete transaction
// @route   DELETE /api/v1/transactions/:id
// @access  Public
exports.deleteUser = async (req, res, next) => {
  try {
    const user = await Users.findById(req.params.id);

    if(!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    await user.remove();

    return res.status(200).json({
      success: true,
      data: {}
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}