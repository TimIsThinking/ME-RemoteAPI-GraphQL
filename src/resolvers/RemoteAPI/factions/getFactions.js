const fetch = require('node-fetch');

module.exports = {
    Query: {
        factions: async () => {

            const url = `${process.env.REMOTE_API_URL}/vrageremote/v1/session/factions`;

            const options = {
                method: 'get',
                headers: {
                    Accept: 'appplication/json',
                }
            };

            const response = await fetch(url, options);
            const data = await response.json();
            return data.Data.map(faction => ({
                Name: faction.Name,
                Tag: faction.Tag,
            }));
        },
    },
};
