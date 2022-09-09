const router = require("express").Router();

const {
    allUsers,
    getOneUser,
    createUser,
} = require("../../controllers/UserController");

// * `GET` all users and create new user
router.route("/").get(allUsers);

// * `GET` a single user by its `_id` and populated thought and friend data
router.route("/:userId").get(getOneUser);

// * `POST` a new user:
router.route("/").post(createUser);

// * `PUT` to update a user by its `_id`

// * `DELETE` to remove user by its `_id`

// **BONUS**: Remove a user's associated thoughts when deleted.



// **`/api/users/:userId/friends/:friendId`**

// * `POST` to add a new friend to a user's friend list

// * `DELETE` to remove a friend from a user's friend list

module.exports = router;
