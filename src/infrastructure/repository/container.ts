import {AwilixContainer, createContainer, Lifetime} from 'awilix';
import {CatRepository} from "./cat-repository";

export const repositoryContainer: AwilixContainer = createContainer();

repositoryContainer.loadModules(
    [
        `${__dirname}/**/!(*.test)*.{ts,js}`,
    ],
    {
        formatName: 'camelCase',
        resolverOptions: {
            lifetime: Lifetime.SINGLETON,
        },
    },
);


export interface RepositoryDependencies {
    catRepository: CatRepository
}
