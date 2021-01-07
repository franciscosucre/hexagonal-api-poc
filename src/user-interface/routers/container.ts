import {AwilixContainer, createContainer, Lifetime} from 'awilix';

import catsRouter from './cats-router'
import mainRouter from './main-router'

export const routerContainer: AwilixContainer = createContainer();

routerContainer.loadModules(
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


export interface RouterDependencies {
    catsRouter: ReturnType<typeof catsRouter>;
    mainRouter: ReturnType<typeof mainRouter>;
}
