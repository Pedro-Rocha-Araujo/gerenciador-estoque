import { Router } from "express"
import { 
  getProdutos,
  getProduto,
  addProduto,
  editarProduto,
  deletarProduto
} from "./controllers/produtos.js"

const router = Router()

router.get("/", getProdutos)
router.get("/:id", getProduto)
router.post("/", addProduto)
router.put("/:id", editarProduto)
router.delete("/:id", deletarProduto)

export default router