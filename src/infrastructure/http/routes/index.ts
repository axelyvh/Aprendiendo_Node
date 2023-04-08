import { Router } from 'express';
import { readdirSync } from "fs";
import {  } from "./users.router";

const PATH_ROUTER = __dirname;
const routes = Router();

const cleanFileName = (filename:string) => {
    const file = filename.split(".").shift();
    return file;
}

readdirSync(PATH_ROUTER).filter((filename) => {
    const cleanName = cleanFileName(filename);
    if(cleanName !== "index"){
        console.log(cleanName);
        import(`./${cleanName}.router`).then((moduleRouter) => {
            routes.use(`/${cleanName}`, moduleRouter.router)
        })
    }
})

export default routes;