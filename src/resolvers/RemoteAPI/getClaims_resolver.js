const fetch = require('node-fetch');
const authorizeRemoteAPI = require('../../utils/authorizeRemoteAPI');

module.exports = {
    Query: {
        claims: async () => {

            const url = `${process.env.REMOTE_API_URL}/vrageremote/v1/session/claims`;
            const { Authorization, Date } = authorizeRemoteAPI(url);

            const options = {
                method: 'get',
                headers: {
                    Accept: 'appplication/json',
                    Authorization,
                    Date
                }
            };

            const response = await fetch(url, options);
            const data = await response.json();
            return data.Data.map(claim => ({
                AreaId: `${claim.AreaId}`,
                Location: claim.Location,
                Name: claim.Name,
                OwnerId: `${claim.OwnerId}`,
                OwnerName: claim.OwnerName,
                TimeRemaining: claim.TimeRemaining ? `${claim.TimeRemaining}` : ''
            }));
        },
    },
};
