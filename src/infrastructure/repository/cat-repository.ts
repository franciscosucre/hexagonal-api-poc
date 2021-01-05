import {Dependencies} from "../../container";
import {Cat} from "../../domain/entities/cat";
import {adaptResult} from "../database-client";

export default ({databaseClient}: Dependencies) => {
    const collectionName = 'cats'
    return {
        collectionName,
        async listCats() {
            const dbObjs = await databaseClient.getCollection(collectionName)
                .find()
                .toArray();
            return dbObjs.map(d => restore(d));
        },
        async findCat(id: string) {
            const dbObj = await databaseClient.getCollection(collectionName)
                .findOne({id})
            return dbObj ? restore(dbObj) : null
        },
        async saveCat(cat) {
            const dbObj = adaptResult(
                await databaseClient.getCollection(collectionName).findOneAndUpdate({id: cat.id}, {$set: adapt(cat)}, {
                    upsert: true,
                    returnOriginal: false
                }),
            );
            return dbObj ? restore(dbObj) : null
        },
        async removeCat(id: string) {
            const dbObj = adaptResult(await databaseClient.getCollection(collectionName)
                .findOneAndDelete({id}))
            return dbObj ? restore(dbObj) : null
        },

    } as CatRepository

}

export interface CatRepository {
    listCats(): Promise<Cat[]>

    findCat(id: string): Promise<Cat | null>

    saveCat(cat: Cat): Promise<Cat | null>

    removeCat(id: string): Promise<Cat | null>
}

function adapt(input: Cat) {
    return {
        id: input.id,
        name: input.name
    }
}

function restore(dbInput: ReturnType<typeof adapt>): Cat {
    return new Cat({id: dbInput.id, name: dbInput.name})
}
