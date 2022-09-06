const { Schema, model } = require("mongoose");

// Schema to create Thought model
const thoughtSchema = new Schema(
    {
      thoughtText: {
            type: String,
            required: true,
            // between 1 and 280 characters
        },
        createdAt: {
            type: Date,
            // Set default value to the current timestamp
            // Use a getter method to format the timestamp on query
        },
        // Fix username and reaction in schema
    //     username:{
    //       type: String,
    //       required: true,
    //         {
    //         type: Schema.Types.ObjectId,
    //         ref: "User",
    //         },
    //     },
    //   reactions: [
    //     {
    //       type: Schema.Types.ObjectId,
    //       ref: "reaction",
    //     },
    //   ],
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
);

userSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
});

const User = model("thought", thoughtSchema);

module.exports = Thought;
