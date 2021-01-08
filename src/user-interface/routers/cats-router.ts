import express from 'express'
import {Dependencies} from "../../container";
import * as joi from 'joi'
import {handleRoute} from "../../infrastructure/http";
import {validateRequestPayload, ValidationTarget} from "../../infrastructure/middleware/validate-payload";
import {Cat} from "../../domain/entities/cat";

export default ({catsController}: Dependencies) => {
    const router = express.Router()

    router.get('/', handleRoute(catsController.listAllCats))

    router.post('/', validateRequestPayload(joi.object<Cat>().keys({
        id: joi.string().optional(),
        name: joi.string().required(),
    }), ValidationTarget.BODY), handleRoute(catsController.saveCat))


    return router
}
