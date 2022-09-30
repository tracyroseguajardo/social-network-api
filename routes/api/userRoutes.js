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

// GET all users, POST new user
router.route("/").get(allUsers).post(createUser);

// GET a single user by id along with populated thought & friend data, PUT a user by id, DELETE a user by id
router.route("/:userId").get(getOneUser).put(updateUser).delete(deleteUser);

// `/api/users/:userId/friends/:friendId`
// POST a new friend to a user's friend list, DELETE a friend from a user's friend list
router.route("/:userId/friends/:friendId").post(addNewFriend).delete(removeFriend);

module.exports = router;
