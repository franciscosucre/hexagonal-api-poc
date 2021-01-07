import {AwilixContainer} from 'awilix';
import {Dependencies, getMainContainer} from "../container";

export function resolveDependency<T extends keyof Dependencies>(key: T, inputContainer?: AwilixContainer): Dependencies[T] {
    if (!inputContainer) {
        inputContainer = getMainContainer();
    }
    return inputContainer.resolve(key);
}

