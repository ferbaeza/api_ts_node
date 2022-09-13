import { Request, Router, Response } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/blog";

const router = Router()
router.get('/', getItems)
router.get('/:id', getItem)
router.post('/', postItem)
router.put('/:id', updateItem)
router.delete('/:id', deleteItem)



// router.get('/items', (req:Request,res:Response)=>{
//     res.send({data:"OK"})
// })
export {router}