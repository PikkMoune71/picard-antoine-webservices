import Skills from "#src/models/Skills";

const exposeServices = {
  findAllSkills: async () => {
    try {
      const allSkills = await Skills.find();
      return allSkills;
    } catch (error) {
      throw error;
    }
  },
  createSkill: async (rawData) => {
    try {
      const toSave = new Skills(rawData);
      const newSkill = toSave.save();
      return newSkill;
    } catch (error) {
      throw error;
    }
  },
  findOneSkill: async ({ id }) => {
    try {
      const findSkill = await Skills.findOne({ _id: id });
      return findSkill;
    } catch (error) {
      throw error;
    }
  },
  updateSkill: async ({ id, data }) => {
    try {
      const updatedSkill = await Skills.findOneAndUpdate({ _id: id }, data, {
        new: true,
      });
      return updatedSkill;
    } catch (error) {
      throw error;
    }
  },

  deleteSkill: async ({ id }) => {
    try {
      const deletedSkill = await Skills.findOneAndDelete({ _id: id });
      return deletedSkill;
    } catch (error) {
      throw error;
    }
  },
};

export default exposeServices;
