const fetch = require('node-fetch');

module.exports = {
    Query: {
        faction: async (_, { tag }) => {

            const url = `${process.env.REMOTE_API_URL}/vrageremote/v1/session/factions/${tag}`;

            const options = {
                method: 'get',
                headers: {
                    Accept: 'appplication/json',
                }
            };

            const response = await fetch(url, options);
            const data = await response.json();
            const faction = data.Data;
            return ({
                Name: faction.Name,
                Tag: faction.Tag,
                AllowNewMembers: faction.AllowNewMembers,
                AutoAcceptsMembers: faction.AutoAcceptsMembers,
                LeaderId: faction.LeaderId,
                LeaderName: faction.LeaderName,
                PublicInformation: faction.PublicInformation
            });
        },
    },
};