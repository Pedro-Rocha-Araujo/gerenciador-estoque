import { Router } from "express"
import { getProdutos } from "./controllers/produtos.js"

const router = Router()

router.get("/", getProdutos)

export default router