const config = require("./config");
const Dao = require("./dao");

const data = {
  koedos: [
    {
      id: 1,
      from: 'John Doe',
      to: 'Jane Doe',
      date: '2020-06-03T18:25:43.511Z',
      message: 'Thanks for helping me out with project Koedos.',
      imageurl: 'https://media.giphy.com/media/h55EUEsTG9224/giphy.gif'
    },
  ],
};

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

  return items;
};

module.exports = { getQuotes: getQuotes };
