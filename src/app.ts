import express from 'express'
import cors from 'cors'
import 'dotenv/config'
//import { router } from './routes/item'
import { router } from './routes/index'
import {dbConnection} from './config/mongo'

const PORT = process.env.PORT || 3001

const app = express()
app.use(cors())
app.use(express.json())

app.use(router)
dbConnection().then(()=>console.log('Ready Conexion'))

app.listen(PORT,() => console.log(`Backend running on http://localhost:${PORT}`))