const router = require("express").Router();

const {
    getAllThoughts,
    getSingleThought,
    newThought,
} = require("../../controllers/ThoughtController");



// * `GET` to get all thoughts
router.route("/").get(getAllThoughts).post(newThought);

// * `GET` to get a single thought by its `_id`
router.route("/:thoughtId").get(getSingleThought);

// * `POST` to create a new thought (don't forget to push the created thought's `_id` to the associated user's `thoughts` array field)

// * `PUT` to update a thought by its `_id`

// * `DELETE` to remove a thought by its `_id`

// **`/api/thoughts/:thoughtId/reactions`**

// * `POST` to create a reaction stored in a single thought's `reactions` array field

// * `DELETE` to pull and remove a reaction by the reaction's `reactionId` value

module.exports = router;