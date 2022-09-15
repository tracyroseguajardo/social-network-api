const router = require("express").Router();

const {
    allUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    addNewFriend,
    removeFriend
} = require("../../controllers/UserController");

// * `GET` all users and create new user
router.route("/").get(allUsers).post(createUser);

// * `GET` a single user by its `_id` and populated thought and friend data
// * `PUT` to update a user by its `_id`
// * `DELETE` to remove user by its `_id`
router.route("/:userId").get(getOneUser).put(updateUser).delete(deleteUser);



// **BONUS**: Remove a user's associated thoughts when deleted.



// **`/api/users/:userId/friends/:friendId`**

// * `POST` to add a new friend to a user's friend list
router.route("/:userId/friends/:friendId").post(addNewFriend).delete(removeFriend);

// * `DELETE` to remove a friend from a user's friend list

module.exports = router;
