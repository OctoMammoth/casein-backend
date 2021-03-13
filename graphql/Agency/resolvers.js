const Agency = {
  Query: {
    findUniqueAgency: (_parent, args, { prisma }) => {
      return prisma.agency.findUnique(args)
    },
    findFirstAgency: (_parent, args, { prisma }) => {
      return prisma.agency.findFirst(args)
    },
    findManyAgency: (_parent, args, { prisma }) => {
      return prisma.agency.findMany(args)
    },
    findManyAgencyCount: (_parent, args, { prisma }) => {
      return prisma.agency.count(args)
    },
    aggregateAgency: (_parent, args, { prisma }) => {
      return prisma.agency.aggregate(args)
    },
  },
  Mutation: {
    createOneAgency: (_parent, args, { prisma }) => {
      return prisma.agency.create(args)
    },
    updateOneAgency: (_parent, args, { prisma }) => {
      return prisma.agency.update(args)
    },
    deleteOneAgency: async (_parent, args, { prisma }) => {
      return prisma.agency.delete(args)
    },
    upsertOneAgency: async (_parent, args, { prisma }) => {
      return prisma.agency.upsert(args)
    },
    deleteManyAgency: async (_parent, args, { prisma }) => {
      return prisma.agency.deleteMany(args)
    },
    updateManyAgency: (_parent, args, { prisma }) => {
      return prisma.agency.updateMany(args)
    },
  },
}

module.exports = {
  Agency,
}
