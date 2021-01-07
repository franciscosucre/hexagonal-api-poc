import {AwilixContainer, createContainer, Lifetime} from 'awilix';
import {infrastructureContainer, InfrastructureDependencies} from "./infrastructure/container";
import {ServerFactory} from "./user-interface/server-factory";
import {routerContainer, RouterDependencies} from "./user-interface/routers/container";
import {serviceContainer, ServiceDependencies} from "./domain/services/container";
import {useCaseContainer, UseCaseDependencies} from "./domain/usescases/container";
import {controllerContainer, ControllerDependencies} from "./user-interface/controllers/container";


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
    container.register(controllerContainer.registrations)
    container.register(routerContainer.registrations)
    container.register(infrastructureContainer.registrations)
    container.register(serviceContainer.registrations)
    container.register(useCaseContainer.registrations)
    return container;
}


export type Dependencies = {
    serverFactory: ServerFactory;
} & InfrastructureDependencies & RouterDependencies & ServiceDependencies & UseCaseDependencies & ControllerDependencies


