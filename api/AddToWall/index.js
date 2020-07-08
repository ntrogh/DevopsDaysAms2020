const { fetchZen, checkGitHubRepo } = require("../shared/utils");
const Dao = require("../shared/dao")
const config = require("../shared/config")

const getDao = () => {
    return new Dao(config.cosmosdb_databaseId, config.cosmosdb_containerId);
}

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const repoUrl = req.query.repoUrl;

    // input parameters:
    //  - repo URL
    // output parameters:
    //  - octocat quote
    if (repoUrl) {
        // Check if GitHub repo exists and that there is a GitHub action associated with it
        if (!await checkGitHubRepo(repoUrl)) {
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
                body: `{ "quote": "${quoteText}" }`
            };

            // Create a data object to be stored in CosmosDB
            let quoteObject = {
                quote: quote,
                quoteText: quoteText,
                date: new Date(),
                repoUrl: repoUrl
            }

            const querySpec = {
                query: `SELECT * from c WHERE c["repoUrl"] = "${repoUrl}"`
            };

            const dao = getDao();
            const items = await dao.find(querySpec);
            console.log(items);
            if (items.length == 0) {
                // Only add the quote if there isn't one yet for this repo
                console.log(`Adding quote '${quoteText}' for repo ${repoUrl}.`);

                // Add quote to zen quote wall (CosmosDB)
                await dao.addItem(quoteObject);
            } else {
                console.log(`Ignoring insert - already a quote for repo ${repoUrl}.`);
            }
        }
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a 'repoUrl' on the query string"
        };
    }
};