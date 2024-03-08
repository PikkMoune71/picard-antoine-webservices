import mongoose from "mongoose";
const { Schema } = mongoose;

const projectsSchema = new Schema({
  name: String,
  description: String,
  users: [
    {
      ref: "users",
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});
const projectsdModel = mongoose.model("projects", projectsSchema);

export default projectsdModel;
