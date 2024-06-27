import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  gender: {
    reuired: true,
    type: String,
    enum: ["Male", "Female"],
  },
  profilepic: {
    type: string,
    default: "",
  },
});

const user = mongoose.model("User", userSchema);

export default User;