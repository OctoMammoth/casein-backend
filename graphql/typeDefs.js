const { Achievement } = require('./Achievement/typeDefs')
const { Route } = require('./Route/typeDefs')
const { Room } = require('./Room/typeDefs')
const { Agency } = require('./Agency/typeDefs')
const { User } = require('./User/typeDefs')
const { mergeTypeDefs } = require('@graphql-tools/merge')
const { sdlInputs } = require('@paljs/plugins')

const typeDefs = mergeTypeDefs([
  sdlInputs(),
  User,
  Agency,
  Room,
  Route,
  Achievement,
])

module.exports = { typeDefs }
