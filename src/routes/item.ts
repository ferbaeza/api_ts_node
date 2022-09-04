import { Request, Router, Response } from "express";
import { getItems } from "../controllers/items";

const router = Router()
router.get('/', getItems)



// router.get('/items', (req:Request,res:Response)=>{
//     res.send({data:"OK"})
// })
export {router}