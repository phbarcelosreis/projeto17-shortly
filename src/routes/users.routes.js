import { Router } from "express";
import signUp from "../controllers/userLog.controller.js";
import {checkSignUp, checkSignIn} from "../middlewares/checkLog.middleware.js";

const routerUser = Router();

routerUser.post('/signup', checkSignUp, signUp);
routerUser.post('/signin', checkSignIn);
routerUser.get('/users/me');
routerUser.get('/ranking');

export default routerUser;