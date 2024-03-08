import projectsService from "#src/services/projectsService";

const exposeController = {
  allProjects: async (req, res) => {
    const { query } = req;
    const allProjects = await projectsService.findAllProjects(query);
    const xCountProjects = await projectsService.countProjects(query);
    res.set("X-count", xCountProjects);
    return res.json(allProjects);
  },
  createProject: async (req, res) => {
    const { body } = req;
    try {
      const createdProject = await projectsService.createProject(body);
      return res.json(createdProject);
    } catch (error) {
      return res.sendStatus(400);
    }
  },
  findOneProject: async (req, res) => {
    const { params } = req;
    const foundProject = await projectsService.findOneProject(params);
    if (!foundProject) return res.sendStatus(404);
    return res.json(foundProject);
  },
  updateProject: async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    try {
      const toUpdate = await projectsService.updateProject({ id, body });

      return res.json(toUpdate);
    } catch (error) {
      // return res.sendStatus(400);
      return res.json({ error });
    }
  },
  patchProject: async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    try {
      const toPatch = await projectsService.patchProject(id, body);
      return res.json(toPatch);
    } catch (error) {
      return res.sendStatus(400);
    }
  },
  deleteProject: async (req, res) => {
    const { params } = req;
    const deletedProject = await projectsService.deleteProject(params);
    if (!deletedProject) return res.sendStatus(404);
    return res.json(deletedProject);
  },
};

export default exposeController;
