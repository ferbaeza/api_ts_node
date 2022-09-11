import { Request, Response, Router } from "express";

const router = Router()

const getItems=(req:Request,res:Response)=>{
    res.send({data:"OK, Controller"})
}
const getItem =()=>{}
const updateItem =()=>{}
const postItem =()=>{}
const deleteItem =()=>{}
export{router, getItems, getItem, updateItem, postItem, deleteItem}
