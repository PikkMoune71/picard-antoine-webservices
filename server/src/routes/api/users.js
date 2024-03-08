import express from "express";
import usersController from "#src/controllers/usersController";
import authGard from "#src/middleware/authGard";
import RBAC from "#src/middleware/rbac";
const router = express.Router();

router.get("/", authGard.protect, usersController.allUsers);
router.post(
  "/",
  [authGard.protect, RBAC.authorizationChecker],
  usersController.createUser
);
router.get("/:id", authGard.protect, usersController.findOneUser);
router.delete(
  "/:id",
  [authGard.protect, RBAC.authorizationChecker],
  usersController.deleteUser
);
router.put(
  "/:id",
  [authGard.protect, RBAC.authorizationChecker],
  usersController.updateUser
);
router.patch(
  "/:id",
  [authGard.protect, RBAC.authorizationChecker],
  usersController.patchUser
);

export default router;
