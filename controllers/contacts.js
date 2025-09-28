const { ObjectId } = require('mongodb');
const client = require('../db/connection');

const getAllContacts = async (req, res, next) => {
  const result = await client.getDb().db().collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  })
};

const getSingleContact = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await client
    .getDb()
    .db()
    .collection('contacts')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists [0]);
  })
};

module.exports = { getAllContacts, getSingleContact };