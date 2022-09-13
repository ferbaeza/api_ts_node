import { Request, Response, Router } from "express";
import { handleHttp } from "../utils/error.handle";

const router = Router()

const getItems=(req:Request,res:Response)=>{
    try {
        res.send({data:"OK, Controller"})        
    } catch (error) {
        handleHttp(res,'ERROR_GET_BLOG') 
    }
}
const getItem =(req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        handleHttp(res,'ERROR_GET_BLOG') 
    }

}
const updateItem =(req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        handleHttp(res,'ERROR_GET_BLOG') 
    }

}
const postItem =(req:Request,res:Response)=>{
    try {
        const body = req.body
        res.send(body)
    } catch (error) {
        handleHttp(res,'ERROR_GET_BLOG') 
    }

}
const deleteItem =(req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        handleHttp(res,'ERROR_GET_BLOG') 
    }

}
export{router, getItems, getItem, updateItem, postItem, deleteItem}
