import {Properties} from "../../infrastructure/interfaces";

import {v4 as uuidv4} from 'uuid'
import {convertToString} from "../../infrastructure/convert-safely";

export class Cat {
    public readonly id: string;
    public readonly name: string;

    constructor({id, name}: Properties<Cat>) {
        this.id = convertToString({value: id, defaultValue: uuidv4()}) as string;
        this.name = convertToString({value: name}) as string;
    }
}
