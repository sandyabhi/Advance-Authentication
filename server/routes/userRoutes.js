import express from "express";
import {
  login,
  logout,
  register,
  verify,
  addTask,
  updateTask,
  getMyProfile,
  updateProfile,
  removeTask,
  updatePassword,
  forgetPassword,
  resetPassword,
} from "../controllers/userControllers.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/verify").post(isAuthenticated, verify);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/me").get(isAuthenticated, getMyProfile);

router.route("/updateprofile").put(isAuthenticated, updateProfile);
router.route("/updatepassword").put(isAuthenticated, updatePassword);
router.route("/forgetpassword").post(forgetPassword);
router.route("/resetpassword").put(resetPassword);

router.route("/newtask").post(isAuthenticated, addTask);
router
  .route("/task/:taskId")
  .get(isAuthenticated, updateTask)
  .delete(isAuthenticated, removeTask);

export default router;
