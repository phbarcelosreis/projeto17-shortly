import { Router } from "express";
import {checkSignUp, checkSignIn} from "../middlewares/checkLog.middleware.js";

const routerUser = Router();

routerUser.post('/signup', checkSignUp);
routerUser.post('/signin', checkSignIn);
routerUser.get('/users/me');
routerUser.get('/ranking');

export default routerUser;