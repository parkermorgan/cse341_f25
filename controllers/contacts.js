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

module.exports = { getAllContacts, getSingleContact };