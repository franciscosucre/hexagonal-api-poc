import express from 'express'
import {Dependencies} from "../container";
import {Cat} from "../domain/entities/cat";
import {validateRequestPayload, ValidationTarget} from "../validation";
import * as joi from 'joi'

export default ({listAllCats, saveCat}: Dependencies) => {
    const router = express.Router()

    router.get('/', async (req, res, next) => {
        return res.json(await listAllCats())
    })

    router.post('/', validateRequestPayload(joi.object().keys({
        id: joi.string().optional(),
        name: joi.string().required(),
    }), ValidationTarget.BODY), async (req, res, next) => {
        console.log(req.body)
        return res.json(await saveCat(new Cat(req.body)))
    })


    return router
}
