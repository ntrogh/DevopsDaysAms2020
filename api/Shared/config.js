// @ts-check
const process = require("process");

const config = {
    cosmosdb_endpoint: process.env.COSMOSDB_ENDPOINT,
    cosmosdb_key: process.env.COSMOSDB_KEY,
    cosmosdb_databaseId: "devopsdaysamsdb",
    cosmosdb_containerId: "quotes",
    cosmosdb_partitionKey: "date"
};

module.exports = config;