const fetch = require('node-fetch');

module.exports = {
    Query: {
        factionMembers: async (_, { tag }) => {

            const url = `${process.env.REMOTE_API_URL}/vrageremote/v1/session/factions/${tag}/members`;

            const options = {
                method: 'get',
                headers: {
                    Accept: 'appplication/json',
                }
            };

            const response = await fetch(url, options);
            const data = await response.json();
            return data.Data.map(member => ({
                MemberId: member.MemberId,
                MemberName: member.MemberName
            }));
        },
    },
};
