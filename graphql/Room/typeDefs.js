const { default: gql } = require('graphql-tag')

const Room = gql`
  type Room {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    route: Route!
    User: User
    userId: String
    routeId: String!
  }

  type Query {
    findUniqueRoom(where: RoomWhereUniqueInput!): Room
    findFirstRoom(
      where: RoomWhereInput
      orderBy: [RoomOrderByInput!]
      cursor: RoomWhereUniqueInput
      distinct: RoomScalarFieldEnum
      skip: Int
      take: Int
    ): Room
    findManyRoom(
      where: RoomWhereInput
      orderBy: [RoomOrderByInput!]
      cursor: RoomWhereUniqueInput
      distinct: RoomScalarFieldEnum
      skip: Int
      take: Int
    ): [Room!]
    findManyRoomCount(
      where: RoomWhereInput
      orderBy: [RoomOrderByInput!]
      cursor: RoomWhereUniqueInput
      distinct: RoomScalarFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateRoom(
      where: RoomWhereInput
      orderBy: [RoomOrderByInput!]
      cursor: RoomWhereUniqueInput
      distinct: RoomScalarFieldEnum
      skip: Int
      take: Int
    ): AggregateRoom
  }
  type Mutation {
    createOneRoom(data: RoomCreateInput!): Room!
    updateOneRoom(where: RoomWhereUniqueInput!, data: RoomUpdateInput!): Room!
    deleteOneRoom(where: RoomWhereUniqueInput!): Room
    upsertOneRoom(
      where: RoomWhereUniqueInput!
      create: RoomCreateInput!
      update: RoomUpdateInput!
    ): Room
    deleteManyRoom(where: RoomWhereInput): BatchPayload
    updateManyRoom(
      where: RoomWhereInput
      data: RoomUpdateManyMutationInput
    ): BatchPayload
  }
`

module.exports = {
  Room,
}
