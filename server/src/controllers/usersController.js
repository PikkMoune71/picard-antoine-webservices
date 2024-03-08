import usersService from "#src/services/usersService";

const exposeController = {
  allUsers: async (req, res) => {
    const { query } = req;
    const allUsers = await usersService.findAllUsers(query);
    const xCountUser = await usersService.countUsers(query);
    res.set("X-count", xCountUser);
    return res.json(allUsers);
  },
  createUser: async (req, res) => {
    const { body } = req;
    try {
      const registeredUser = await usersService.createUser(body);
      return res.json(registeredUser);
    } catch (error) {
      return res.sendStatus(400);
      // return res.json({error})
    }
  },

  findOneUser: async (req, res) => {
    const { params } = req;
    const foundUser = await usersService.findOneUserById(params);
    if (!foundUser) return res.sendStatus(404);
    return res.json(foundUser);
  },

  updateUser: async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    try {
      const toUpdate = await usersService.updateUser({ id, body });

      return res.json(toUpdate);
    } catch (error) {
      // return res.sendStatus(400);
      return res.json({ error });
    }
  },
  patchUser: async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    try {
      const toPatch = await usersService.patchUser({ id, body });
      return res.json(toPatch);
    } catch (error) {
      return res.sendStatus(400);
      // return res.json({error})
    }
  },
  deleteUser: async (req, res) => {
    const { params } = req;
    const deletedUser = await usersService.deleteUser(params);
    if (!deletedUser) return res.sendStatus(404);
    return res.json(deletedUser);
  },
};

export default exposeController;
