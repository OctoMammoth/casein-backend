require('dotenv').config()

const { ApolloServer, gql } = require('apollo-server')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const { mergeTypeDefs } = require('@graphql-tools/merge')
// const { default: gql } = require('graphql-tag')

const express = require('express')
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')

const { typeDefs } = require('./graphql/typeDefs')
const { resolvers } = require('./graphql/resolvers')

const { checkRole } = require('./utils/auth')

const app = express()

app.use(cors())

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../public')))

const portExpress = process.env.PORT_EXPRESS|| 8001

app.listen(portExpress, () => {
    console.log('images server start on http://localhost:' + portExpress)
})

const defaultTypeDefs = gql`
    scalar Json
`

const server = new ApolloServer({
    typeDefs: mergeTypeDefs([typeDefs, defaultTypeDefs]),
    resolvers,
    context: (req) => {
        const { authorization } = req.req.headers
        const checkToken = async () => {
            const roles = ['USER', 'ADMIN']
            const checks = await Promise.all(
                roles.map(async (role) => {
                    return await checkRole(authorization, role, prisma, false)
                })
            )
            const find = checks.find((object) => object)
            if (find) {
                return find
            } else {
                throw new Error('Token timeout')
            }
        }
        const access = async (...roles) => {
            roles.push('admin')
            const checks = await Promise.all(
                roles.map(async (role) => {
                    return await checkRole(authorization, role, prisma, false)
                })
            )
            const find = checks.find((object) => object)
            if (find) {
                return find
            } else {
                throw new Error('Not access')
            }
        }
        return {
            prisma,
            access,
            checkToken
        }
    }
})

const port = process.env.PORT || 8000

server.listen({ port }, () => {
    console.log(`server start on http://localhost:${port}`)
})