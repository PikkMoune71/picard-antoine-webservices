import express from "express";
import authGard from "#src/middleware/authGard";
import RBAC from "#src/middleware/rbac";
import rolesController from "#src/controllers/rolesController";
const router = express.Router();

router.post(
  "/",
  [authGard.protect, RBAC.authorizationChecker],
  rolesController.addNewRoles
);
router.get("/", authGard.protect, rolesController.allRoles);
router.get("/:id", authGard.protect, rolesController.findOneRole);
router.put(
  "/:id",
  [authGard.protect, RBAC.authorizationChecker],
  rolesController.updateRole
);
router.patch("/:id", authGard.protect, rolesController.patchRole);
router.delete(
  "/:id",
  [authGard.protect, RBAC.authorizationChecker],
  rolesController.deleteRole
);

export default router;
