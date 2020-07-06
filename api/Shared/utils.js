const fetch = require("node-fetch");

const utils = {
    fetchZen: async function () {
        const response = await fetch("https://api.github.com/octocat");
        const message = await response.text();
        if (response.status != 200) {
            throw new Error(
                `Received ${response.status} status code. Reason: ${message}`
            );
        }
        return message;
    },
    checkGitHubRepo: async function (repoUrl) {
        let match = repoUrl.match(/github.com/gm);
        if (match == null) {
            return false;
        }
        
        const response = await fetch(repoUrl);
        const message = await response.text();
        if (response.status != 200) {
            return false;
        }
        return true;
    }
};

module.exports = utils;
