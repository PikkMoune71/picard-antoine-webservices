import express from "express";
import authGard from "#src/middleware/authGard";
import RBAC from "#src/middleware/rbac";

import roleServices from "#src/services/rolesService";
const router = express.Router();

router.post(
  "/",
  [authGard.protect, RBAC.authorizationChecker],
  async (req, res) => {
    const { body } = req;
    console.log(body);
    const addNewRole = await roleServices.addNewRoles(body);
    res.json(addNewRole);
  }
);

export default router;
