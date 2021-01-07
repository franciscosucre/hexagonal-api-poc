import express from 'express'
import {Dependencies} from "../../container";
import {validateRequestPayload, ValidationTarget} from "../../libs/validation";
import * as joi from 'joi'
import {handleRoute} from "../../libs/http";

export default ({catsController}: Dependencies) => {
    const router = express.Router()

    router.get('/', handleRoute(catsController.listAllCats))

    router.post('/', validateRequestPayload(joi.object().keys({
        id: joi.string().optional(),
        name: joi.string().required(),
    }), ValidationTarget.BODY), handleRoute(catsController.saveCat))


    return router
}
