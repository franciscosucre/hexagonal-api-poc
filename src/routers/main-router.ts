import {RouterDependencies} from "./container";
import express from "express";


export default ({catsRouter}: RouterDependencies) => {
    const router = express.Router()
    router.get('/', (req, res, next) => {
        return res.json({api: 'cats'})
    })
    router.use('/cats', catsRouter)
    return router
}
