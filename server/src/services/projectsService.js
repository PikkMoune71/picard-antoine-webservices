import Projects from "#src/models/Projects";
import queryBuilder from "#src/utils/mongoQueryBuilder";

const exposeServices = {
  findAllProjects: async (query) => {
    const { filter, projection, options } = queryBuilder.getFindOptions({
      query,
    });

    try {
      const allProjects = await Projects.find(
        filter,
        projection,
        options
      ).populate("users");
      return allProjects;
    } catch (error) {
      throw new Error(error);
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
  updateProject: async (id, data) => {
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
  patchProject: async (id, data) => {
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
  countProjects: async (query) => {
    const { filter } = queryBuilder.getFindOptions({ query });

    try {
      const howManyProjects = await Projects.countDocuments(filter);
      return howManyProjects;
    } catch (error) {
      throw new Error(error);
    }
  },
};
export default exposeServices;
