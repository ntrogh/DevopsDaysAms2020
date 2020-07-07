const config = require("./config");
const Dao = require("./dao");

const getDao = () => {
  return new Dao(config.cosmosdb_databaseId, config.cosmosdb_containerId);
}

async function getQuotes() {
  console.log('using DB data');
  const dao = getDao();

  const querySpec = {
    query: `SELECT * from c`
  };
  const items = await dao.find(querySpec);

  items = [{
    id: 1,
    quoteText: 'Je pense donc je suis.'
  }];

  return items;
};

module.exports = { getQuotes: getQuotes };
