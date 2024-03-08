import User from "#src/models/Users";
import bcrypt from "bcryptjs";
import queryBuilder from "#src/utils/mongoQueryBuilder";

const exposeServices = {
  findOneUserByEmail: async ({ email }) => {
    try {
      const findUser = await User.findOne({ email });
      return findUser;
    } catch (error) {
      throw error;
    }
  },
  findOneUserById: async ({ id }) => {
    try {
      const findUser = await User.findOne({ _id: id });
      return findUser;
    } catch (error) {
      throw error;
    }
  },
  findOneUserByIdWithRoles: async ({ id }) => {
    try {
      const findUser = await User.findOne({ _id: id }).populate("roles");
      return findUser;
    } catch (error) {
      throw error;
    }
  },
  findUserByRefreshToken: async ({ refreshToken }) => {
    try {
      const findUser = await User.findOne({ refreshToken });
      return findUser;
    } catch (error) {
      throw error;
    }
  },
  findAllUsers: async (query) => {
    const { filter, projection, options } = queryBuilder.getFindOptions({
      query,
    });

    try {
      const allUsers = await User.find(filter, projection, options).populate(
        "skills"
      );
      return allUsers;
    } catch (error) {
      throw new Error(error);
    }
  },
  createUser: async (rawData) => {
    const { password } = rawData;
    const salt = bcrypt.genSaltSync(4);
    const hash = bcrypt.hashSync(password, salt);

    const newUserData = {
      ...rawData,
      password: hash,
    };

    try {
      const toSave = new User(newUserData);
      const newUser = toSave.save();
      return newUser;
    } catch (error) {
      throw error;
    }
  },
  updateUser: async ({ id, body }) => {
    const query = {
      _id: id,
    };
    const updateQ = {
      $set: body,
    };
    try {
      const toUpdate = await User.findOneAndUpdate(query, updateQ, {
        new: true,
      });
      return toUpdate;
    } catch (error) {
      throw error;
    }
  },
  patchUser: async ({ id, body }) => {
    const query = {
      _id: id,
    };
    const updateQ = {
      $set: body,
    };
    try {
      const toPatch = await User.findOneAndUpdate(query, updateQ, {
        new: true,
      });
      return toPatch;
    } catch (error) {
      throw error;
    }
  },
  updateUserToken: async ({ userId, refreshToken }) => {
    const query = {
      _id: userId,
    };
    const updateQ = {
      $set: {
        refreshToken,
      },
    };
    try {
      const toUpdate = await User.findOneAndUpdate(query, updateQ, {
        new: true,
      });
      return toUpdate;
    } catch (error) {
      throw error;
    }
  },
  deleteUser: async ({ id }) => {
    try {
      const toDelete = await User.findOneAndDelete({ _id: id });
      return toDelete;
    } catch (error) {
      throw error;
    }
  },
  countUsers: async (query) => {
    const { filter } = queryBuilder.getFindOptions({ query });

    try {
      const howManyUsers = await User.countDocuments(filter);
      return howManyUsers;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default exposeServices;
