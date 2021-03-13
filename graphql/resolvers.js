const { Achievement } = require('./Achievement/resolvers')
const { Route } = require('./Route/resolvers')
const { Room } = require('./Room/resolvers')
const { Agency } = require('./Agency/resolvers')
const { User } = require('./User/resolvers')

const resolvers = [User, Agency, Room, Route, Achievement]

module.exports = { resolvers }
