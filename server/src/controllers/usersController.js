import usersService from "#src/services/usersService";

const exposeController = {
  allUsers: async (req, res) => {
    // const allUsers = await usersService.findAllUsers();
    // return res.json(allUsers);

    // all users trier par date de creation la plus recente
    const allUsers = await usersService.findAllUsers();
    const sortedUsers = allUsers.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });
    return res.json(sortedUsers);
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
      const toUpdate = await creationsService.updateUser({ id, body });

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
      const toPatch = await creationsService.patchUser({ id, body });
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
