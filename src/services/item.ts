import { Car } from "../interfaces/car.interfaces";
import ItemModel from "../models/itemsModel";
 
const interItem = async (item:Car)=>{
    const responseInsert = await ItemModel.create(item)
    return responseInsert
} 



export {interItem}