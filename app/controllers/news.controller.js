const db = require("../models");
const News = db.news;


// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Name can not be empty!" });
    return;
  }

  // Create a News
  const news = new News({
    title: req.body.title,
    description: req.body.description,
  });

  // Save News in the database
  news
    .save(news)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
};


// Retrieve all News from the database.
exports.findAll = (req, res) => {
  const type = req.query.title;
  var condition = type ? { type: { $regex: new RegExp(type), $options: "i" } } : {};

  News.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};
