const express = require('express')
const {createContact, getAllContact, getContact, deleteContact} = require('../controller/contactController.jsx')

const router = express.Router()

router.get('/',getAllContact)

router.get('/:id', getContact)

router.post('/', createContact)

router.delete('/:id', deleteContact)

// router.patch('/:id', updateContact)

module.exports = router 