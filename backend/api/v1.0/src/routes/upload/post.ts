import { Router } from "express";
const router = Router();

import { uploading } from "middlewares/uploadFile";

router.post('/', uploading.single('file'), async (req, res) => {
    /* TODO: Save the req.file to the database */
    console.log(req.file);

    return res.status(200).send({ ok: true, fileName: req.file.filename });
});


export { router as uploadRouter }