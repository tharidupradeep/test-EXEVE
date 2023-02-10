var express = require('express');
var router = express.Router();

var Data = require('../database');


// Route for getting all the data
router.get('/getAll', async function(req, res, next) {
  const data = await Data.find();
  res.send(data).status(200);
});

// Route for getting a single data by id
router.get('/get/?:id', async function(req, res, next) {
  let idNumber = parseInt(req.params.id);
  const data = await Data.findOne({ id: idNumber });
  if (!data) {
    return res.status(404).send('The data with the given ID was not found.');
  }
  res.send(data).status(200);
});

// Find the records in the database
router.get('/get?:count', async function(req, res, next) {
  let limit = parseInt(req.query.count);
  await Data.find().limit(limit).exec((err, data) => {
    if (err) {
      return res.send(err).status(404);
    }
    res.send(data).status(200);
  });
});

// Route for creating a new data
router.post('/save', async function(req, res, next) {
  const data = new Data({
    id: req.body.id,
    title: req.body.title,
    subTitle: req.body.subTitle,
    image: req.body.image
  });
  await data.save();
  res.send(data).status(201);
});

// Route for updating a data by id
router.put('/update/:id', async function(req, res, next) {
  const data = await Data.findOneAndUpdate({ id: req.params.id }, {
    title: req.body.title,
    subTitle: req.body.subTitle,
    image: req.body.image
  }, { new: true });
  if (!data) {
    return res.status(404).send('The data with the given ID was not found.');
  }
  res.send(data).status(200);
});

// Route for deleting a data by id
router.delete('/dalete/:id', async function(req, res, next) {
  const data = await Data.findOneAndRemove({ id: req.params.id });
  if (!data) {
    return res.status(404).send('The data with the given ID was not found.');
  }
  res.send(data).status(200);
});

module.exports = router;
