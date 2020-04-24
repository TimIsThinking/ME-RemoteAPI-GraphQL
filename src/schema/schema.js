const { gql } = require('apollo-server');
const remoteAPI = require('./RemoteAPI/remoteAPI_schema');

const linkSchema = gql`
    type Query {
        _: Boolean
    }

    type Mutation {
        _: Boolean
    }

    type Subscription {
        _: Boolean
    }
`;

module.exports = [linkSchema, remoteAPI];