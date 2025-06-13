import express from "express";
import {test} from "../controllers/user.controller.js"
import { verifyToken } from "../utils/user.js";
import { updateUser,deleteUser,signOut } from "../controllers/user.controller.js";

const router = express.Router();

router.get('/test',test);
router.put('/update/:id',verifyToken,updateUser);
router.delete('/delete/:id',verifyToken,deleteUser);
router.get('/sign-out',signOut);

export default router;