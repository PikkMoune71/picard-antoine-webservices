import Projects from "#src/models/Projects";

const exposeServices = {
  findAllProjects: async () => {
    try {
      const allProjects = await Projects.find().populate("users");
      return allProjects;
    } catch (error) {
      throw error;
    }
  },
  createProject: async (rawData) => {
    try {
      const toSave = new Projects(rawData);
      const newProject = toSave.save();
      return newProject;
    } catch (error) {
      throw error;
    }
  },
  findOneProject: async ({ id }) => {
    try {
      const findProject = await Projects.findOne({ _id: id }).populate("users");
      return findProject;
    } catch (error) {
      throw error;
    }
  },
  updateProject: async ({ id, data }) => {
    try {
      const updatedProject = await Projects.findOneAndUpdate(
        { _id: id },
        data,
        {
          new: true,
        }
      );
      return updatedProject;
    } catch (error) {
      throw error;
    }
  },
  patchProject: async ({ id, data }) => {
    try {
      const patchedProject = await Projects.findOneAndUpdate(
        { _id: id },
        data,
        {
          new: true,
        }
      );
      return patchedProject;
    } catch (error) {
      throw error;
    }
  },
  deleteProject: async ({ id }) => {
    try {
      const deletedProject = await Projects.findOneAndDelete({ _id: id });
      return deletedProject;
    } catch (error) {
      throw error;
    }
  },
};
export default exposeServices;
