import rolesService from "#src/services/rolesService";

const exposeController = {
  addNewRoles: async (req, res) => {
    async (req, res) => {
      const { body } = req;
      const addNewRole = await rolesService.addNewRoles(body);
      res.json(addNewRole);
    };
  },
  allRoles: async (req, res) => {
    const allRoles = await rolesService.allRoles();
    res.json(allRoles);
  },
  findOneRole: async (req, res) => {
    const { params } = req;
    const foundRole = await rolesService.findOneRole(params);
    if (!foundRole) return res.sendStatus(404);
    return res.json(foundRole);
  },
  updateRole: async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    try {
      const toUpdate = await rolesService.updateRole({ id, body });
      return res.json(toUpdate);
    } catch (error) {
      return res.sendStatus(400);
    }
  },
  patchRole: async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    try {
      const toPatch = await rolesService.patchRole({ id, body });
      return res.json(toPatch);
    } catch (error) {
      return res.sendStatus(400);
    }
  },
  deleteRole: async (req, res) => {
    const { params } = req;
    const deletedRole = await rolesService.deleteRole(params);
    if (!deletedRole) return res.sendStatus(404);
    return res.json(deletedRole);
  },
};
export default exposeController;
