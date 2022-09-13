import { Schema, Types, model, Model } from "mongoose";
import { Car } from "../interfaces/car.interfaces";

const ItemSchema = new Schema<Car>(
    {
        color:{
            type: String,
            required: true
        },
        branch:{
            type: String,
            required: true
        },
        year:{
            type: Number,
            required: true
        },
        price:{
            type:Number,
            required: true
        },
        engine: {
            type:String,
            required: true,
            enum:['gasoline', 'electric']
        }
    },
    {
        timestamps:true,
        versionKey: false
    }
)
const ItemModel = model('items', ItemSchema)
export default ItemModel