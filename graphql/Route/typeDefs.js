const { default: gql } = require('graphql-tag')

const Route = gql`
  type Route {
    id: String!
    title: String!
    description: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    agency: Agency!
    agencyId: String!
    Room(
      where: RoomWhereInput
      orderBy: RoomOrderByInput
      cursor: RoomWhereUniqueInput
      take: Int
      skip: Int
      distinct: RoomScalarFieldEnum
    ): [Room!]!
    route: Json
    startAt: DateTime!
    endAt: DateTime
    Achievement: Achievement
  }

  type Query {
    findUniqueRoute(where: RouteWhereUniqueInput!): Route
    findFirstRoute(
      where: RouteWhereInput
      orderBy: [RouteOrderByInput!]
      cursor: RouteWhereUniqueInput
      distinct: RouteScalarFieldEnum
      skip: Int
      take: Int
    ): Route
    findManyRoute(
      where: RouteWhereInput
      orderBy: [RouteOrderByInput!]
      cursor: RouteWhereUniqueInput
      distinct: RouteScalarFieldEnum
      skip: Int
      take: Int
    ): [Route!]
    findManyRouteCount(
      where: RouteWhereInput
      orderBy: [RouteOrderByInput!]
      cursor: RouteWhereUniqueInput
      distinct: RouteScalarFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateRoute(
      where: RouteWhereInput
      orderBy: [RouteOrderByInput!]
      cursor: RouteWhereUniqueInput
      distinct: RouteScalarFieldEnum
      skip: Int
      take: Int
    ): AggregateRoute
  }
  type Mutation {
    createOneRoute(data: RouteCreateInput!): Route!
    updateOneRoute(
      where: RouteWhereUniqueInput!
      data: RouteUpdateInput!
    ): Route!
    deleteOneRoute(where: RouteWhereUniqueInput!): Route
    upsertOneRoute(
      where: RouteWhereUniqueInput!
      create: RouteCreateInput!
      update: RouteUpdateInput!
    ): Route
    deleteManyRoute(where: RouteWhereInput): BatchPayload
    updateManyRoute(
      where: RouteWhereInput
      data: RouteUpdateManyMutationInput
    ): BatchPayload
  }
`

module.exports = {
  Route,
}
