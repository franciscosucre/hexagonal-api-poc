import {Dependencies} from "../../container";
import {Cat} from "../entities/cat";
import {CustomError} from "../../infrastructure/middleware/error-handling-middleware";

export default ({catRepository}: Dependencies) => {
    return {
        listCats() {
            return catRepository.listCats()
        },
        async findCat(id: string) {
            const cat = await catRepository.findCat(id)
            if (!cat) {
                throw new CustomError({statusCode: 404, code: 'resource-not-found'})
            }
            return cat
        },
        saveCat(cat) {
            return catRepository.saveCat(cat)
        },
        async removeCat(id: string) {
            const cat = await catRepository.removeCat(id)
            if (!cat) {
                throw new CustomError({statusCode: 404, code: 'resource-not-found'})
            }
            return cat
        },

    } as CatService
}

export interface CatService {
    listCats(): Promise<Cat[]>
    findCat(id: string): Promise<Cat>
    saveCat(cat: Cat): Promise<Cat>
    removeCat(id: string): Promise<Cat>
}
