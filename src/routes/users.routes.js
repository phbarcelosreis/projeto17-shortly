import { Router } from "express";
import signUp, { signIn } from "../controllers/userLog.controller.js";
import { checkSignIn, checkSignUp } from "../middlewares/checkLog.middleware.js";

const routerUser = Router();

routerUser.post('/signup', checkSignUp, signUp);
routerUser.post('/signin', checkSignIn, signIn);
routerUser.get('/users/me');
routerUser.get('/ranking');

export default routerUser;