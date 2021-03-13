const Room = {
  Query: {
    findUniqueRoom: (_parent, args, { prisma }) => {
      return prisma.room.findUnique(args)
    },
    findFirstRoom: (_parent, args, { prisma }) => {
      return prisma.room.findFirst(args)
    },
    findManyRoom: (_parent, args, { prisma }) => {
      return prisma.room.findMany(args)
    },
    findManyRoomCount: (_parent, args, { prisma }) => {
      return prisma.room.count(args)
    },
    aggregateRoom: (_parent, args, { prisma }) => {
      return prisma.room.aggregate(args)
    },
  },
  Mutation: {
    createOneRoom: (_parent, args, { prisma }) => {
      return prisma.room.create(args)
    },
    updateOneRoom: (_parent, args, { prisma }) => {
      return prisma.room.update(args)
    },
    deleteOneRoom: async (_parent, args, { prisma }) => {
      return prisma.room.delete(args)
    },
    upsertOneRoom: async (_parent, args, { prisma }) => {
      return prisma.room.upsert(args)
    },
    deleteManyRoom: async (_parent, args, { prisma }) => {
      return prisma.room.deleteMany(args)
    },
    updateManyRoom: (_parent, args, { prisma }) => {
      return prisma.room.updateMany(args)
    },
  },
}

module.exports = {
  Room,
}
