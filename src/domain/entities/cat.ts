import {Properties} from "../../libs/interfaces";

import {v4 as uuidv4} from 'uuid'

export class Cat {
    public readonly id: string;
    public readonly name: string;

    constructor({id, name}: Properties<Cat>) {
        this.id = id || uuidv4();
        this.name = name
    }
}
