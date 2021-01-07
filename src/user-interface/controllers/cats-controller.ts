import {RequestHandler} from 'express'
import {Dependencies} from "../../container";
import {Cat} from "../../domain/entities/cat";

export default ({listAllCats, saveCat}: Dependencies) => {
    return {
        listAllCats: async function (req, res, next) {
            return res.json(await listAllCats())
        } as RequestHandler,
        saveCat: async function (req, res, next) {
            return res.json(await saveCat(new Cat(req.body)))
        } as RequestHandler
    }
}
