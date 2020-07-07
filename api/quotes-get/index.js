const data = require('../shared/quotes-data');

module.exports = async function (context, req) {
  try {
    const quotes = await data.getQuotes();
    context.res.status(200).json(quotes);
  } catch (error) {
    context.res.status(500).send(error);
  }
};
