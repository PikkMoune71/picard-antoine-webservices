import Roles from "#src/models/Roles";

const exposeServices = {
  addNewRoles: async (rawData) => {
    try {
      const newRoles = new Roles(rawData);
      const addRole = await newRoles.save();
      return addRole;
    } catch (error) {
      throw error;
    }
  },
  allRoles: async () => {
    try {
      const allRoles = await Roles.find();
      return allRoles;
    } catch (error) {
      throw error;
    }
  },
  findOneRole: async ({ id }) => {
    try {
      const findRole = await Roles.findOne({ _id: id });
      return findRole;
    } catch (error) {
      throw error;
    }
  },
  updateRole: async ({ id, body }) => {
    try {
      const toUpdate = await Roles.findOneAndUpdate(
        { _id: id },
        { $set: body },
        { new: true }
      );
      return toUpdate;
    } catch (error) {
      throw error;
    }
  },
  patchRole: async ({ id, body }) => {
    try {
      const toPatch = await Roles.findOneAndUpdate(
        { _id: id },
        { $set: body },
        { new: true }
      );
      return toPatch;
    } catch (error) {
      throw error;
    }
  },

  deleteRole: async ({ id }) => {
    try {
      const toDelete = await Roles.findOneAndDelete({ _id: id });
      return toDelete;
    } catch (error) {
      throw error;
    }
  },
};

export default exposeServices;
