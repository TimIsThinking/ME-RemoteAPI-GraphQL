const { gql } = require('apollo-server');

module.exports = gql`
  type Claim {
    AreaId: String
    Location: String
    Name: String
    OwnerId: String
    OwnerName: String
    TimeRemaining: String
  }

  type Query {
    claims: [Claim]
  }
`;
