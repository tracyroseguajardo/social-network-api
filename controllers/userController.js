const { User, Thought } = require("../models");

module.exports = {

    // Get all users
    allUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    // Get a single user by _id and populate thought & friend data
    getOneUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .populate('thoughts')
            .populate('friends')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: "No user with that ID" })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    // Create a new user
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },

    // Update a user by _id
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            {
                runValidators: true,
                new: true
            }
        ).then((user) =>
            !user
                ? res.status(404).json({ message: "No user with that ID" })
                : res.json(user)
        )
            .catch((err) => res.status(500).json(err));
    },

    // Delete a user by _id
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
        .then((user) =>
            !user
                ? res.status(404).json({ message: "No user with that ID" })
                // Remove a user's associated thoughts when deleted
                : Thought.deleteMany({ _id: { $in: user.thoughts } })
        )
            .then(() => res.json({ message: 'User and their thoughts deleted!' }))
            .catch((err) => res.status(500).json(err));
    },

    ///api/users/:userId/friends/:friendId
    
    // Add a new friend to a user's friend list
    addNewFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $push: { friends: req.params.friendId } },
            // {
            //     new: true
            // }
        ).then((user) =>
            !user
                ? res.status(404).json({ message: "No user with that ID" })
                : res.json(user)
        )
            .catch((err) => res.status(500).json(err));
    },

    // Delete a friend from a user's friend list
    removeFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            {
                new: true
            }
        ).then((user) =>
            !user
                ? res.status(404).json({ message: "No user with that ID" })
                : res.json(user)
        )
            .catch((err) => res.status(500).json(err));
    },
}