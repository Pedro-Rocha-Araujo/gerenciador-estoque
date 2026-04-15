import { Router } from "express"
import { 
  getProdutos,
  getProduto,
  addProduto,
  editarProduto,
  deletarProduto
} from "./controllers/produtos.js"

import { checarCampos, checarId } from "./middlewares/middlewares.js"

const router = Router()

router.get("/", getProdutos)
router.get("/:id", checarId, getProduto)
router.post("/", checarCampos, addProduto)
router.put("/:id", checarId, checarCampos, editarProduto)
router.delete("/:id", checarId, deletarProduto)

export default router