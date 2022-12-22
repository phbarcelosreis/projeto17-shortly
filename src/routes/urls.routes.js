import { Router } from "express";

const routerUrls = Router();

routerUrls.post('/urls/shorten');
routerUrls.get('/urls/:id');
routerUrls.get('/urls/open/:shortUrl');
routerUrls.delete('/urls/:id');

export default routerUrls;