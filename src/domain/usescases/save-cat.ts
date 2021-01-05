import {Dependencies} from "../../container";
import {Cat} from "../entities/cat";

export default ({catService}: Dependencies) => {
    return async function (cat: Cat) {
        return catService.saveCat(cat)
    }
}
