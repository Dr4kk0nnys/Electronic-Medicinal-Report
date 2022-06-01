import { Router } from "express";
const router = Router();

/* Note: Routes */
import { indexRoute } from ".";

// router.use(indexRoute);
router.get('/', indexRoute);

export { router as routes };