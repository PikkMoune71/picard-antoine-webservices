import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    lastName: String,
    firstName: String,
    email: { type: String, required: "un nom est obligatoire:)", unique: true },
    password: { type: String },
    roles: [
      {
        ref: "roles",
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
    refreshToken: String,
    skills: [
      {
        ref: "skills",
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
  },
  { timestamps: true }
);

const userModel = mongoose.model("users", userSchema);

export default userModel;
