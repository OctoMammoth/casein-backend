const Achievement = {
  Query: {
    findUniqueAchievement: (_parent, args, { prisma }) => {
      return prisma.achievement.findUnique(args)
    },
    findFirstAchievement: (_parent, args, { prisma }) => {
      return prisma.achievement.findFirst(args)
    },
    findManyAchievement: (_parent, args, { prisma }) => {
      return prisma.achievement.findMany(args)
    },
    findManyAchievementCount: (_parent, args, { prisma }) => {
      return prisma.achievement.count(args)
    },
    aggregateAchievement: (_parent, args, { prisma }) => {
      return prisma.achievement.aggregate(args)
    },
  },
  Mutation: {
    createOneAchievement: (_parent, args, { prisma }) => {
      return prisma.achievement.create(args)
    },
    updateOneAchievement: (_parent, args, { prisma }) => {
      return prisma.achievement.update(args)
    },
    deleteOneAchievement: async (_parent, args, { prisma }) => {
      return prisma.achievement.delete(args)
    },
    upsertOneAchievement: async (_parent, args, { prisma }) => {
      return prisma.achievement.upsert(args)
    },
    deleteManyAchievement: async (_parent, args, { prisma }) => {
      return prisma.achievement.deleteMany(args)
    },
    updateManyAchievement: (_parent, args, { prisma }) => {
      return prisma.achievement.updateMany(args)
    },
  },
}

module.exports = {
  Achievement,
}
