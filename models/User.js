const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    min: 3,
    max: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    max: 50,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  pendingRequests: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  profileImage: {
    type: String,
  },
});

module.exports = mongoose.model("User", UserSchema);
