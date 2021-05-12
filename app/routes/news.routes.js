var router = require("express").Router();

const news = require("../controllers/news.controller.js");

// Create a new news
router.post("/", news.create);

// Retrieve all news
router.get("/", news.findAll);

// // Retrieve a single news with id
// router.get("/:id", news.findOne);

// // Update a news with id
// router.put("/:id", news.update);

// // Delete a news with id
// router.delete("/:id", news.delete);

// // Create a new news
// router.delete("/", news.deleteAll);

module.exports = router;