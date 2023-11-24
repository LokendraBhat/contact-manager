const asyncHandler = require("express-async-handler");

// @desc Register a user
// @route GET /api/user/register
// @access public
const registerUser = asyncHandler(async (req, res) => {
    res.json({ message: "Register the user" });
});


// @desc User Login
// @route GET /api/user/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: "Login user" })
});


// @desc Current user info
// @route GET /api/user/current
// @access private
const currentUser = asyncHandler(async (req, res) => {
    res.json({ message: "Current user info" })
});


module.exports = { registerUser, currentUser, loginUser };