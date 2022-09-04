import "dotenv/config"
import { connect } from "mongoose"

const MONGO = process.env.MONGO

async function dbConnection():Promise<void> {
    const DB_URI =<string>process.env.DB_URI
    await connect(DB_URI)    
}

export{dbConnection}