////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express");
const Log = require("../models/Log");

/////////////////////////////////////////
// Create Router
/////////////////////////////////////////
const router = express.Router();

/////////////////////////////////////////
// Routes
/////////////////////////////////////////

// REMEMBER INDUCES

// Index
router.get('/', (req, res) => {
  Log.find({})
    .then(foundLogs => {
      res.render('logs/Index', {
        logs: foundLogs
      });
    })
    .catch(error => res.status(400).json({ error }))
})

// New
router.get('/new', (req, res) => {
  res.render('logs/New');
});

// Delete
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  Log.deleteOne({ _id: id })
    .then(data => res.redirect('/logs'))
    .catch(error => res.status(400).json({ error }));
});

// Update
router.put('/:id', (req, res) => {
  const id = req.params.id
  req.body.cost = parseFloat(req.body.cost);

  Log.updateOne({ _id: id }, req.body, { new: true })
    .then(data => res.redirect('/logs'))
    .catch(error => res.status(400).json({ error }));
});

// Create
router.post('/', (req, res) => {
  req.body.cost = parseFloat(req.body.cost);
  Log.create(req.body)
    .then(data => res.redirect('/logs'))
    .catch(error => res.status(400).json({ error }));
});

// Edit
router.get('/:id/edit', (req, res) => {
  const id = req.params.id;

  Log.findOne({ _id: id })
    .then(foundLog => {
      res.render('logs/Edit', { log: foundLog });
    })
    .catch(error => res.status(400).json({ error }));
});

// Show
router.get('/:id', (req, res) => {
  // get the id from params
  const id = req.params.id;

  // find the particular log from the database
  Log.findOne({ _id: id })
    .then(foundLog => {
      res.render('logs/Show', { log: foundLog });
    })
    .catch(error => res.status(400).json({ error }));
});

//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;