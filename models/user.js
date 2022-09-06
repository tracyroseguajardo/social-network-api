const { Schema, model } = require("mongoose");

// Schema to create User model
const userSchema = new Schema(
    {
      username: {
            type: String,
            unique: true,
            required: true,
            trimmed: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            // include valid email matching validation
        },
      thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: "Thought",
        },
      ],
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
      ],
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
);

userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
});

const User = model("user", userSchema);

module.exports = User;
