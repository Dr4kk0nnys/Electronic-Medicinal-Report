import { Router } from "express";
const router = Router();

router.get('/', async (req, res) => {
    return res.status(200).send({ ok: true });
})

export { router as indexRouter };