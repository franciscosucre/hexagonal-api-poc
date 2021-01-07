import express from "express";
import {Dependencies} from "../../container";
import {handleRoute} from "../../libs/http";


export default ({mainController, catsRouter}: Dependencies) => {
    const router = express.Router()
    router.get('/', handleRoute(mainController.index))
    router.use('/cats', catsRouter)
    return router
}
