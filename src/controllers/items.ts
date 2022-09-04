import { Request, Response, Router } from "express";

const router = Router()

const getItems=(req:Request,res:Response)=>{
    res.send({data:"OK, Controller"})
}
export{router, getItems}
