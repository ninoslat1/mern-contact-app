const Contact = require('../model/Contact.jsx')
const mongoose = require('mongoose')

//Get All Contact
const getAllContact = async (req,res) => {
    const allContact = await Contact.find({}).sort({createdAt: -1})
    return res.status(200).json(allContact)
}

//Get Specific COntact
const getContact = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such contact'})
    }

    const contact = await Contact.findById(id)
    if(!contact){
        return res.status(404).json({error: 'No such contact'})
    }
    return res.status(200).json(contact)
}

//Create New Contact
const createContact = async (req,res) => {
    const {name, number, email, address} = req.body

    let emptyField = []

    if(!name) {
        emptyField.push('name')
    }
    if(!number) {
        emptyField.push('number')
    }
    if(emptyField.length > 0){
        return res.status(400).json({error: 'Please fill in required fields', emptyField})
    }

    try{
        const contact = await Contact.create({name, number, email, address})
        res.status(200).json(contact);
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

//Delete A Contact
const deleteContact = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such contact'})
    }

    const contact = await Contact.findOneAndDelete({_id: id})
    if(!contact){
        return res.status(404).json({error: 'No such contact'})
    }
    return res.status(200).json(contact)
}

//Update A Contact
// const updateContact = async (req,res) => {
//     const {id} = req.params

//     if(!mongoose.Types.ObjectId.isValid(id)){
//         return res.status(404).json({error: 'No such contact'})
//     }

//     const contact = await Contact.findOneAndUpdate({_id: id}, {...req.body})
//     if(req.body.name == ""){
//         return res.json({error: 'Name section must fulfill'})
//     }

//     if(req.body.number == ""){
//         return res.json({error: 'Number section must fulfill'})
//     }

//     if(req.body.name == contact.name && req.body.number == contact.number && req.body.email == contact.email && req.body.address == contact.address){
//         return res.json({error: "There is no update in existing contact"})
//     }

//     return res.status(200).json({contact})

// }

module.exports = {createContact, getAllContact, getContact, deleteContact}