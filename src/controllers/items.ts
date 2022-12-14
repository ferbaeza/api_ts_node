import { Request, Response, Router } from "express";
import { interItem } from "../services/item";
import { handleHttp } from "../utils/error.handle";

const router = Router()

const getItems=(req:Request,res:Response)=>{
    try {
        res.send({data:"OK, Controller"})        
    } catch (error) {
        handleHttp(res,'ERROR_GET_ITEMS') 
    }
}
const getItem =(req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        handleHttp(res,'ERROR_GET_ITEMS') 
    }

}
const updateItem =(req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        handleHttp(res,'ERROR_GET_ITEMS') 
    }

}
const postItem = async (req:Request,res:Response)=>{
    try {
        const body = req.body
        const responseItem = await interItem(body)
        res.send(responseItem)
    } catch (error) {
        handleHttp(res,'ERROR_GET_ITEMS', error) 
    }

}
const deleteItem =(req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        handleHttp(res,'ERROR_GET_ITEMS') 
    }

}
export{router, getItems, getItem, updateItem, postItem, deleteItem}
