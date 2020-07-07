const { fetchZen, checkGitHubRepo } = require("../shared/utils");
const Dao = require("../shared/dao")
const config = require("../shared/config")

const getDao = () => {
    return new Dao(config.cosmosdb_databaseId, config.cosmosdb_containerId);
}

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    // input parameters:
    //  - repo URL
    // output parameters:
    //  - octocat quote
    if (req.query.repoUrl) {
        // Check if GitHub repo exists and that there is a GitHub action associated with it
        if (!await checkGitHubRepo(req.query.repoUrl)) {
            context.res = {
                status: 400,
                body: "Please provide a valid GitHub repository URL"
            };
        } else {
            // extract the quote from the ASCII art
            let quote = await fetchZen();
            let match = quote.match(/\| (.+) \|/gm);
            let quoteText = match[1].substring(2, match[1].length - 2);

            context.res = {
                body: `{ "quote": "${quoteText}", "octocat_quote": "${quote}" }`
            };

            // Add quote to zen quote wall (CosmosDB)
            let quoteObject = {
                quote: quote,
                quoteText: quoteText,
                date: new Date(),
                repoUrl: req.query.repoUrl
            }

            const dao = getDao();
            await dao.addItem(quoteObject);
        }
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a 'repoUrl' on the query string"
        };
    }
};