import { Router } from "express";
const router = Router();

/* Note: Routes */
import { indexRouter } from ".";
import { uploadRouter } from "./upload/post";
import { getUploadRouter } from "./upload/get";

// router.use(indexRoute);
router.use('/', indexRouter);
router.use('/upload', uploadRouter);
router.use('/upload', getUploadRouter);

export { router as routes };