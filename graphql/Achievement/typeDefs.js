const { default: gql } = require('graphql-tag')

const Achievement = gql`
  type Achievement {
    id: String!
    createdAt: DateTime!
    User(
      where: UserWhereInput
      orderBy: UserOrderByInput
      cursor: UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: UserScalarFieldEnum
    ): [User!]!
    qr_secret: String
    name: String!
    prizes: Json
    route: Route
    routeId: String
  }

  type Query {
    findUniqueAchievement(where: AchievementWhereUniqueInput!): Achievement
    findFirstAchievement(
      where: AchievementWhereInput
      orderBy: [AchievementOrderByInput!]
      cursor: AchievementWhereUniqueInput
      distinct: AchievementScalarFieldEnum
      skip: Int
      take: Int
    ): Achievement
    findManyAchievement(
      where: AchievementWhereInput
      orderBy: [AchievementOrderByInput!]
      cursor: AchievementWhereUniqueInput
      distinct: AchievementScalarFieldEnum
      skip: Int
      take: Int
    ): [Achievement!]
    findManyAchievementCount(
      where: AchievementWhereInput
      orderBy: [AchievementOrderByInput!]
      cursor: AchievementWhereUniqueInput
      distinct: AchievementScalarFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateAchievement(
      where: AchievementWhereInput
      orderBy: [AchievementOrderByInput!]
      cursor: AchievementWhereUniqueInput
      distinct: AchievementScalarFieldEnum
      skip: Int
      take: Int
    ): AggregateAchievement
  }
  type Mutation {
    createOneAchievement(data: AchievementCreateInput!): Achievement!
    updateOneAchievement(
      where: AchievementWhereUniqueInput!
      data: AchievementUpdateInput!
    ): Achievement!
    deleteOneAchievement(where: AchievementWhereUniqueInput!): Achievement
    upsertOneAchievement(
      where: AchievementWhereUniqueInput!
      create: AchievementCreateInput!
      update: AchievementUpdateInput!
    ): Achievement
    deleteManyAchievement(where: AchievementWhereInput): BatchPayload
    updateManyAchievement(
      where: AchievementWhereInput
      data: AchievementUpdateManyMutationInput
    ): BatchPayload
  }
`

module.exports = {
  Achievement,
}
