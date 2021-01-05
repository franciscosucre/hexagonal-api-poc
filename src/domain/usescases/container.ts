import {AwilixContainer, createContainer, Lifetime} from 'awilix';

import listAllCats from './list-all-cats'
import saveCat from './save-cat'

export const useCaseContainer: AwilixContainer = createContainer();

useCaseContainer.loadModules(
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

export type UseCaseDependencies = {
    listAllCats: ReturnType<typeof listAllCats>;
    saveCat: ReturnType<typeof saveCat>;
}


