import {AwilixContainer, createContainer, Lifetime} from 'awilix';
import {infrastructureContainer, InfrastructureDependencies} from "./infrastructure/container";
import {ServerFactory} from "./server-factory";
import {routerContainer, RouterDependencies} from "./routers/container";
import {serviceContainer, ServiceDependencies} from "./domain/services/container";
import {useCaseContainer, UseCaseDependencies} from "./domain/usescases/container";


let container: AwilixContainer;


export function getMainContainer() {
    if (!container) {
        container = createContainer();
    }

    container.loadModules(
        [
            `${__dirname}/server-factory!(*.test)*.{ts,js}`,
        ],
        {
            formatName: 'camelCase',
            resolverOptions: {
                lifetime: Lifetime.SINGLETON,
            },
        },
    );
    container.register(routerContainer.registrations)
    container.register(infrastructureContainer.registrations)
    container.register(serviceContainer.registrations)
    container.register(useCaseContainer.registrations)
    return container;
}


export type Dependencies = {
    serverFactory: ServerFactory;
} & InfrastructureDependencies & RouterDependencies & ServiceDependencies & UseCaseDependencies


