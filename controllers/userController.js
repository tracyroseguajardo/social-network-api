const { User, Thought } = require("../models");

module.exports = {

    // * `GET` all users
    allUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    // * `GET` a single user by its `_id` and populated thought and friend data
    getOneUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .populate('thoughts')
            .populate('friends')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    // * `POST` a new user:
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },

    // * `PUT` to update a user by its `_id`
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
                ? res.status(404).json({ message: 'No user with that ID' })
                : res.json(user)
        )
            .catch((err) => res.status(500).json(err));
    }

    // * `DELETE` to remove user by its `_id`

    // **BONUS**: Remove a user's associated thoughts when deleted.



    // **`/api/users/:userId/friends/:friendId`**

    // * `POST` to add a new friend to a user's friend list

    // * `DELETE` to remove a friend from a user's friend list
}