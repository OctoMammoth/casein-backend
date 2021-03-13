const { default: gql } = require('graphql-tag')

const User = gql`
  type User {
    id: String!
    email: String!
    password: String!
    name: String!
    role: RoleEnum!
    agency: Agency
    rooms(
      where: RoomWhereInput
      orderBy: RoomOrderByInput
      cursor: RoomWhereUniqueInput
      take: Int
      skip: Int
      distinct: RoomScalarFieldEnum
    ): [Room!]!
    Achievements(
      where: AchievementWhereInput
      orderBy: AchievementOrderByInput
      cursor: AchievementWhereUniqueInput
      take: Int
      skip: Int
      distinct: AchievementScalarFieldEnum
    ): [Achievement!]!
  }

  type Query {
    findUniqueUser(where: UserWhereUniqueInput!): User
    findFirstUser(
      where: UserWhereInput
      orderBy: [UserOrderByInput!]
      cursor: UserWhereUniqueInput
      distinct: UserScalarFieldEnum
      skip: Int
      take: Int
    ): User
    findManyUser(
      where: UserWhereInput
      orderBy: [UserOrderByInput!]
      cursor: UserWhereUniqueInput
      distinct: UserScalarFieldEnum
      skip: Int
      take: Int
    ): [User!]
    findManyUserCount(
      where: UserWhereInput
      orderBy: [UserOrderByInput!]
      cursor: UserWhereUniqueInput
      distinct: UserScalarFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateUser(
      where: UserWhereInput
      orderBy: [UserOrderByInput!]
      cursor: UserWhereUniqueInput
      distinct: UserScalarFieldEnum
      skip: Int
      take: Int
    ): AggregateUser
  }
  type Mutation {
    registerUser(email: String!, password: String!): AuthType!
    authUser(email: String!, password: String!): AuthType!
    createOneUser(data: UserCreateInput!): User!
    updateOneUser(where: UserWhereUniqueInput!, data: UserUpdateInput!): User!
    deleteOneUser(where: UserWhereUniqueInput!): User
    upsertOneUser(
      where: UserWhereUniqueInput!
      create: UserCreateInput!
      update: UserUpdateInput!
    ): User
    deleteManyUser(where: UserWhereInput): BatchPayload
    updateManyUser(
      where: UserWhereInput
      data: UserUpdateManyMutationInput
    ): BatchPayload
  }

  type AuthType {
    token: String,
    user: User,
  }
`

module.exports = {
  User,
}
