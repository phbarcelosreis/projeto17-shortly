import { Router } from "express";

const routerUser = Router();

routerUser.post('/signup');
routerUser.post('/signin');
routerUser.get('/users/me');
routerUser.get('/ranking');

export default routerUser;