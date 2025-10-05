const { ObjectId } = require('mongodb');
const mongodb = require('../db/connection');

const getAllContacts = async (req, res, next) => {
  try {
    const result = await mongodb.getDb().collection('contacts').find();
    const lists = await result.toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  } catch (err) {
    next(err);
  }
};

const getSingleContact = async (req, res, next) => {
  try {
    const userId = new ObjectId(req.params.id);
    const contact = await mongodb.getDb().collection('contacts').findOne({ _id: userId });
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contact);
  } catch (err) {
    next(err);
  }
};

const addSingleContact = async (req, res, next) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  try {
    const response = await mongodb.getDb().collection('contacts').insertOne(contact);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res.status(500).json(response.error || "Error: Contact not created.");
    }
  } catch (err) {
    next(err);
  }
};

const updateContact = async (req, res, next) => {
  try {
    const personId = new ObjectId(req.params.id);
    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    };
    const response = await mongodb.getDb().collection('contacts').replaceOne({ _id: personId }, contact);
    console.log(response)
    if (response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || "Error: Contact not updated.");
    }
  } catch (err) {
    next(err);
  }
};

const deleteContact = async (req, res, next) => {
  try {
    const personId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().collection('contacts').deleteOne({ _id: personId });
    console.log(response);
    if (response.deletedCount > 0) {
      res.status(200).send();
    } else {
      res.status(404).json({ message: 'Contact not found' });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllContacts, getSingleContact, addSingleContact, updateContact, deleteContact };