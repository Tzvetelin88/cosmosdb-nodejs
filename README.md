# cosmosdb-nodejs using Azure Function Apps in Serveless way with nodejs.
Same can be done in standard nodejs backend.
Connect to CosmosDB via Nodejs. Use KeyVault to store and retrieve secrets, and much more...

1. common - contain all functions to connects to DB, get KeyVault secrets and more.
2. GetAllRequests - retrieve all data from Cosmos DB based on 'databaseName' and 'collectionName' comming from env variables. It can be set via CI/CD pipeline and release or set it manually.
3. Control env type - dev, test, prod

more to come...