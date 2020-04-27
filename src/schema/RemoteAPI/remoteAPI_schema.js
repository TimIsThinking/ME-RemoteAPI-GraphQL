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

  type FactionShort {
      Name: String
      Tag: String
  }

  type Faction {
      Name: String
      Tag: String
      AllowNewMembers: Boolean
      AutoAcceptsMembers: Boolean
      LeaderId: String
      LeaderName: String
      PublicInformation: String
  }
  
  type FactionMember {
      MemberId: String
      MemberName: String
  }

  extend type Query {
    claims: [Claim]
    factions: [FactionShort]
    faction(tag: String): Faction
    factionMembers(tag: String): [FactionMember]
  }
`;