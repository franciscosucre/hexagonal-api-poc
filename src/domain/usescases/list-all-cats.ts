import {Dependencies} from "../../container";

export default ({catService}: Dependencies) => {
    return async function () {
        return catService.listCats()
    }
}
