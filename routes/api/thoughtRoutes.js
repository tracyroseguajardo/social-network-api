const router = require("express").Router();

const {
    getAllThoughts,
    getSingleThought,
    newThought,
    editThought,
    deleteThought,
    newReaction,
    deleteReaction
} = require("../../controllers/ThoughtController");

// GET all thoughts, POST new thought
router.route("/").get(getAllThoughts).post(newThought);

// GET a single thought by id, PUT a thought by id, DELETE a thought by id
router.route("/:thoughtId").get(getSingleThought).put(editThought).delete(deleteThought)

// `/api/thoughts/:thoughtId/reactions`**

// POST to create a reaction to a thought
router.route("/:thoughtId/reactions").post(newReaction)

// DELETE to pull and remove a reaction by id
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction)

module.exports = router;