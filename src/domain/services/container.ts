import {AwilixContainer, createContainer, Lifetime} from 'awilix';
import {CatService} from "./cat-service";

export const serviceContainer: AwilixContainer = createContainer();

serviceContainer.loadModules(
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

export type ServiceDependencies = {
    catService: CatService;
}


