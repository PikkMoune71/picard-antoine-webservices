import skillsService from "#src/services/skillsService";

const exposeController = {
  allSkills: async (req, res) => {
    const allSkills = await skillsService.findAllSkills();
    return res.json(allSkills);
  },
  createSkill: async (req, res) => {
    const { body } = req;
    try {
      const createdSkill = await skillsService.createSkill(body);
      return res.json(createdSkill);
    } catch (error) {
      return res.sendStatus(400);
    }
  },
  findOneSkill: async (req, res) => {
    const { params } = req;
    const foundSkill = await skillsService.findOneSkill(params);
    if (!foundSkill) return res.sendStatus(404);
    return res.json(foundSkill);
  },
  updateSkill: async (req, res) => {
    const { params, body } = req;
    const updatedSkill = await skillsService.updateSkill({
      id: params.id,
      data: body,
    });
    if (!updatedSkill) return res.sendStatus(404);
    return res.json(updatedSkill);
  },

  deleteSkill: async (req, res) => {
    const { params } = req;
    const deletedSkill = await skillsService.deleteSkill(params);
    if (!deletedSkill) return res.sendStatus(404);
    return res.json(deletedSkill);
  },
};

export default exposeController;
