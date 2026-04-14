import { Router } from "express"
import { 
  getProdutos,
  addProduto,
  editarProduto,
  deletarProduto
} from "./controllers/produtos.js"

const router = Router()

router.get("/", getProdutos)
router.post("/", addProduto)
router.put("/:id", editarProduto)
router.delete("/:id", deletarProduto)

export default router