const getClaims = require('./RemoteAPI/getClaims_resolver');
const getFactions = require('./RemoteAPI/factions/getFactions');
const getFaction = require('./RemoteAPI/factions/getFaction');
const getFactionMembers = require('./RemoteAPI/factions/members/getFactionMembers');

module.exports = [getClaims, getFactions, getFaction, getFactionMembers];