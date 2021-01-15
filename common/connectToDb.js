const { CosmosClient } = require("@azure/cosmos");
const { getSecret } = require('../common/getSecret.js')
const keyVaultName = process.env["KeyVaultName"];
const endpoint = process.env["CosmosDBEndpoint"];
const databaseName = process.env["DatabaseName"];
const collectionName = process.env["CollectionName"];

async function connectToDb() {
    const { value } = keyVaultName == "dev" ? { "value": process.env["CosmosDBAuthKey"] } : await getSecret('CosmosDBAuthKey')
    return new CosmosClient({ endpoint, key: value }).database(databaseName).container(collectionName);
}

module.exports = connectToDb