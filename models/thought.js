const { Schema, model } = require("mongoose");

// Reaction schema for subdocument
const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
    // Use a getter method to format the timestamp on query
  },
});

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date, default: Date.now
      // Use a getter method to format the timestamp on query
    },
    username: {
      type: String,
      required: true,
      // {
      //   type: Schema.Types.ObjectId,
      //   ref: "User",
      // }
    },
    reactions: [reactionSchema],
  },
{
  toJSON: {
    virtuals: true,
      },
  id: false,
    }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
