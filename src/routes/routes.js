import { Router } from "express";
import routerUrls from "./urls.routes.js";
import routerUser from "./users.routes.js";

const router = Router();

router.use(routerUser);
router.use(routerUrls);

export default router;