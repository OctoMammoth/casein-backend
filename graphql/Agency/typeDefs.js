const { default: gql } = require('graphql-tag')

const Agency = gql`
  type Agency {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    user: User!
    userId: String!
    route(
      where: RouteWhereInput
      orderBy: RouteOrderByInput
      cursor: RouteWhereUniqueInput
      take: Int
      skip: Int
      distinct: RouteScalarFieldEnum
    ): [Route!]!
  }

  type Query {
    findUniqueAgency(where: AgencyWhereUniqueInput!): Agency
    findFirstAgency(
      where: AgencyWhereInput
      orderBy: [AgencyOrderByInput!]
      cursor: AgencyWhereUniqueInput
      distinct: AgencyScalarFieldEnum
      skip: Int
      take: Int
    ): Agency
    findManyAgency(
      where: AgencyWhereInput
      orderBy: [AgencyOrderByInput!]
      cursor: AgencyWhereUniqueInput
      distinct: AgencyScalarFieldEnum
      skip: Int
      take: Int
    ): [Agency!]
    findManyAgencyCount(
      where: AgencyWhereInput
      orderBy: [AgencyOrderByInput!]
      cursor: AgencyWhereUniqueInput
      distinct: AgencyScalarFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateAgency(
      where: AgencyWhereInput
      orderBy: [AgencyOrderByInput!]
      cursor: AgencyWhereUniqueInput
      distinct: AgencyScalarFieldEnum
      skip: Int
      take: Int
    ): AggregateAgency
  }
  type Mutation {
    createOneAgency(data: AgencyCreateInput!): Agency!
    updateOneAgency(
      where: AgencyWhereUniqueInput!
      data: AgencyUpdateInput!
    ): Agency!
    deleteOneAgency(where: AgencyWhereUniqueInput!): Agency
    upsertOneAgency(
      where: AgencyWhereUniqueInput!
      create: AgencyCreateInput!
      update: AgencyUpdateInput!
    ): Agency
    deleteManyAgency(where: AgencyWhereInput): BatchPayload
    updateManyAgency(
      where: AgencyWhereInput
      data: AgencyUpdateManyMutationInput
    ): BatchPayload
  }
`

module.exports = {
  Agency,
}
