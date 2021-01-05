import {AwilixContainer, createContainer, Lifetime} from 'awilix';
import {repositoryContainer, RepositoryDependencies} from "./repository/container";
import {DatabaseClient} from "./database-client";

import express from 'express'


export const infrastructureContainer: AwilixContainer = createContainer();

infrastructureContainer.loadModules(
    [
        `${__dirname}/database!(*.test)*.{ts,js}`,
        `${__dirname}/middleware/**/!(*.test)*.{ts,js}`,
    ],
    {
        formatName: 'camelCase',
        resolverOptions: {
            lifetime: Lifetime.SINGLETON,
        },
    },
);

infrastructureContainer.register(repositoryContainer.registrations);


export type InfrastructureDependencies = {
    databaseClient: DatabaseClient;
    errorHandlingMiddleware: express.RequestHandler
} & RepositoryDependencies


