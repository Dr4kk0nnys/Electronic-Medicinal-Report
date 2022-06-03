import { Router } from "express";
const router = Router();

import { resolve } from 'path';

router.get('/', async (req, res) => {
    const fileName = req.query['filename'];
    if (!fileName) throw new Error('Invalid file name.');

    return res.status(200).sendFile(resolve('./public/uploads') + `/${fileName}`);
});

export { router as getUploadRouter };