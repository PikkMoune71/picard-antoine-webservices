import mongoose from "mongoose";
const { Schema } = mongoose;

const skillsSchema = new Schema({
  name: String,
});

const skillsModel = mongoose.model("skills", skillsSchema);

export default skillsModel;
