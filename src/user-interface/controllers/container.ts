import {AwilixContainer, createContainer, Lifetime} from 'awilix';

import catsController from './cats-controller'
import mainController from './main-controller'

export const controllerContainer: AwilixContainer = createContainer();

controllerContainer.loadModules(
    [
        `${__dirname}/!(*.test)*.{ts,js}`,
    ],
    {
        formatName: 'camelCase',
        resolverOptions: {
            lifetime: Lifetime.SINGLETON,
        },
    },
);


export interface ControllerDependencies {
    catsController: ReturnType<typeof catsController>;
    mainController: ReturnType<typeof mainController>;
}
