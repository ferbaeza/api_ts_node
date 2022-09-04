import { Router } from "express";
import {readdirSync} from "fs"

const PATH = `${__dirname}`
const router = Router()

const cleanExtension=(filename:String)=>{
    const file = filename.split('.').shift()
    return file
}

readdirSync(PATH).filter((filename)=>{
    const cleanName = cleanExtension(filename)
    if (cleanName !== 'index'){
        import(`./${cleanName}`).then((moduleRouter)=>{
            router.use(`/${cleanName}`, moduleRouter.router)
            console.log(`Se esta cargando las rutas ... ${cleanName}`)
        })
    }
})


export {router}