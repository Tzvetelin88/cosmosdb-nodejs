# cosmosdb-nodejs
Using Azure Function App with Nodejs in a ServeLess way. Same can be done in standard nodejs backedn.
Connect to CosmosDB via Nodejs. Use KeyVault to store and retrieve secrets.

1. common - contain all functions to connects to DB, get KeyVaule secrets etc.
2. GetAllRequests - retrieve all data from Cosmos DB based on 'databaseName' and 'collectionName' comming from env variables. It can be set via CI/CD pipeline and release.

