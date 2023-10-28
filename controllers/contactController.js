const asyncHandler = require("express-async-handler");

// @desc Get all contacts
// @route GET /api/contacts
// @access public
const getContacts = asyncHandler(async(req, res) => {
    res.status(200).json({message: "Get all of Contacts"});
});

// @desc Create new contact
// @route POST /api/contacts
// @access public
const createContact = asyncHandler(async(req, res) => {
    console.log("The requied body is ", req.body);
    const {name, email} = req.body;
    if(!name || !email){
        res.status(400);
        throw new Error("All fields are mendatory");
    }
    res.status(201).json({message: "Create Contact"});
});


// @desc Get a contact
// @route GET /api/contacts/:id
// @access public
const getContact = asyncHandler(async(req, res) => {
    res.status(200).json({message: `Get contact for ${req.params.id}`});
});

// @desc Update a contact
// @route PUT /api/contacts/:id
// @access public
const updateContact = asyncHandler(async(req, res) => {
    res.status(200).json({message: `Update contact for ${req.params.id}`});
});

// @desc Delete contact
// @route DELETE /api/contacts/:id
// @access public
const deleteContact = asyncHandler(async(req, res) => {
    res.status(200).json({message: `Delete contact for ${req.params.id}`});
});


module.exports = { getContact, getContacts, createContact, updateContact, deleteContact };