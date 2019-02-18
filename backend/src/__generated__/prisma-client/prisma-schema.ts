export const typeDefs = /* GraphQL */ `type AggregateBoard {
  count: Int!
}

type AggregateColumn {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Board {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String
  query: String
  columns(where: ColumnWhereInput, orderBy: ColumnOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Column!]
}

type BoardConnection {
  pageInfo: PageInfo!
  edges: [BoardEdge]!
  aggregate: AggregateBoard!
}

input BoardCreateInput {
  name: String
  query: String
  columns: ColumnCreateManyWithoutBoardInput
}

input BoardCreateOneWithoutColumnsInput {
  create: BoardCreateWithoutColumnsInput
  connect: BoardWhereUniqueInput
}

input BoardCreateWithoutColumnsInput {
  name: String
  query: String
}

type BoardEdge {
  node: Board!
  cursor: String!
}

enum BoardOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  query_ASC
  query_DESC
}

type BoardPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String
  query: String
}

type BoardSubscriptionPayload {
  mutation: MutationType!
  node: Board
  updatedFields: [String!]
  previousValues: BoardPreviousValues
}

input BoardSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BoardWhereInput
  AND: [BoardSubscriptionWhereInput!]
  OR: [BoardSubscriptionWhereInput!]
  NOT: [BoardSubscriptionWhereInput!]
}

input BoardUpdateInput {
  name: String
  query: String
  columns: ColumnUpdateManyWithoutBoardInput
}

input BoardUpdateManyMutationInput {
  name: String
  query: String
}

input BoardUpdateOneRequiredWithoutColumnsInput {
  create: BoardCreateWithoutColumnsInput
  update: BoardUpdateWithoutColumnsDataInput
  upsert: BoardUpsertWithoutColumnsInput
  connect: BoardWhereUniqueInput
}

input BoardUpdateWithoutColumnsDataInput {
  name: String
  query: String
}

input BoardUpsertWithoutColumnsInput {
  update: BoardUpdateWithoutColumnsDataInput!
  create: BoardCreateWithoutColumnsInput!
}

input BoardWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  query: String
  query_not: String
  query_in: [String!]
  query_not_in: [String!]
  query_lt: String
  query_lte: String
  query_gt: String
  query_gte: String
  query_contains: String
  query_not_contains: String
  query_starts_with: String
  query_not_starts_with: String
  query_ends_with: String
  query_not_ends_with: String
  columns_every: ColumnWhereInput
  columns_some: ColumnWhereInput
  columns_none: ColumnWhereInput
  AND: [BoardWhereInput!]
  OR: [BoardWhereInput!]
  NOT: [BoardWhereInput!]
}

input BoardWhereUniqueInput {
  id: ID
}

type Column {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  board: Board!
  index: Int!
  name: String
  query: String
}

type ColumnConnection {
  pageInfo: PageInfo!
  edges: [ColumnEdge]!
  aggregate: AggregateColumn!
}

input ColumnCreateInput {
  board: BoardCreateOneWithoutColumnsInput!
  index: Int!
  name: String
  query: String
}

input ColumnCreateManyWithoutBoardInput {
  create: [ColumnCreateWithoutBoardInput!]
  connect: [ColumnWhereUniqueInput!]
}

input ColumnCreateWithoutBoardInput {
  index: Int!
  name: String
  query: String
}

type ColumnEdge {
  node: Column!
  cursor: String!
}

enum ColumnOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  index_ASC
  index_DESC
  name_ASC
  name_DESC
  query_ASC
  query_DESC
}

type ColumnPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  index: Int!
  name: String
  query: String
}

input ColumnScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  index: Int
  index_not: Int
  index_in: [Int!]
  index_not_in: [Int!]
  index_lt: Int
  index_lte: Int
  index_gt: Int
  index_gte: Int
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  query: String
  query_not: String
  query_in: [String!]
  query_not_in: [String!]
  query_lt: String
  query_lte: String
  query_gt: String
  query_gte: String
  query_contains: String
  query_not_contains: String
  query_starts_with: String
  query_not_starts_with: String
  query_ends_with: String
  query_not_ends_with: String
  AND: [ColumnScalarWhereInput!]
  OR: [ColumnScalarWhereInput!]
  NOT: [ColumnScalarWhereInput!]
}

type ColumnSubscriptionPayload {
  mutation: MutationType!
  node: Column
  updatedFields: [String!]
  previousValues: ColumnPreviousValues
}

input ColumnSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ColumnWhereInput
  AND: [ColumnSubscriptionWhereInput!]
  OR: [ColumnSubscriptionWhereInput!]
  NOT: [ColumnSubscriptionWhereInput!]
}

input ColumnUpdateInput {
  board: BoardUpdateOneRequiredWithoutColumnsInput
  index: Int
  name: String
  query: String
}

input ColumnUpdateManyDataInput {
  index: Int
  name: String
  query: String
}

input ColumnUpdateManyMutationInput {
  index: Int
  name: String
  query: String
}

input ColumnUpdateManyWithoutBoardInput {
  create: [ColumnCreateWithoutBoardInput!]
  delete: [ColumnWhereUniqueInput!]
  connect: [ColumnWhereUniqueInput!]
  set: [ColumnWhereUniqueInput!]
  disconnect: [ColumnWhereUniqueInput!]
  update: [ColumnUpdateWithWhereUniqueWithoutBoardInput!]
  upsert: [ColumnUpsertWithWhereUniqueWithoutBoardInput!]
  deleteMany: [ColumnScalarWhereInput!]
  updateMany: [ColumnUpdateManyWithWhereNestedInput!]
}

input ColumnUpdateManyWithWhereNestedInput {
  where: ColumnScalarWhereInput!
  data: ColumnUpdateManyDataInput!
}

input ColumnUpdateWithoutBoardDataInput {
  index: Int
  name: String
  query: String
}

input ColumnUpdateWithWhereUniqueWithoutBoardInput {
  where: ColumnWhereUniqueInput!
  data: ColumnUpdateWithoutBoardDataInput!
}

input ColumnUpsertWithWhereUniqueWithoutBoardInput {
  where: ColumnWhereUniqueInput!
  update: ColumnUpdateWithoutBoardDataInput!
  create: ColumnCreateWithoutBoardInput!
}

input ColumnWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  board: BoardWhereInput
  index: Int
  index_not: Int
  index_in: [Int!]
  index_not_in: [Int!]
  index_lt: Int
  index_lte: Int
  index_gt: Int
  index_gte: Int
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  query: String
  query_not: String
  query_in: [String!]
  query_not_in: [String!]
  query_lt: String
  query_lte: String
  query_gt: String
  query_gte: String
  query_contains: String
  query_not_contains: String
  query_starts_with: String
  query_not_starts_with: String
  query_ends_with: String
  query_not_ends_with: String
  AND: [ColumnWhereInput!]
  OR: [ColumnWhereInput!]
  NOT: [ColumnWhereInput!]
}

input ColumnWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Long

type Mutation {
  createBoard(data: BoardCreateInput!): Board!
  updateBoard(data: BoardUpdateInput!, where: BoardWhereUniqueInput!): Board
  updateManyBoards(data: BoardUpdateManyMutationInput!, where: BoardWhereInput): BatchPayload!
  upsertBoard(where: BoardWhereUniqueInput!, create: BoardCreateInput!, update: BoardUpdateInput!): Board!
  deleteBoard(where: BoardWhereUniqueInput!): Board
  deleteManyBoards(where: BoardWhereInput): BatchPayload!
  createColumn(data: ColumnCreateInput!): Column!
  updateColumn(data: ColumnUpdateInput!, where: ColumnWhereUniqueInput!): Column
  updateManyColumns(data: ColumnUpdateManyMutationInput!, where: ColumnWhereInput): BatchPayload!
  upsertColumn(where: ColumnWhereUniqueInput!, create: ColumnCreateInput!, update: ColumnUpdateInput!): Column!
  deleteColumn(where: ColumnWhereUniqueInput!): Column
  deleteManyColumns(where: ColumnWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  board(where: BoardWhereUniqueInput!): Board
  boards(where: BoardWhereInput, orderBy: BoardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Board]!
  boardsConnection(where: BoardWhereInput, orderBy: BoardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BoardConnection!
  column(where: ColumnWhereUniqueInput!): Column
  columns(where: ColumnWhereInput, orderBy: ColumnOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Column]!
  columnsConnection(where: ColumnWhereInput, orderBy: ColumnOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ColumnConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  board(where: BoardSubscriptionWhereInput): BoardSubscriptionPayload
  column(where: ColumnSubscriptionWhereInput): ColumnSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  githubId: ID!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  githubId: ID!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  githubId_ASC
  githubId_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  githubId: ID!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  githubId: ID
}

input UserUpdateManyMutationInput {
  githubId: ID
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  githubId: ID
  githubId_not: ID
  githubId_in: [ID!]
  githubId_not_in: [ID!]
  githubId_lt: ID
  githubId_lte: ID
  githubId_gt: ID
  githubId_gte: ID
  githubId_contains: ID
  githubId_not_contains: ID
  githubId_starts_with: ID
  githubId_not_starts_with: ID
  githubId_ends_with: ID
  githubId_not_ends_with: ID
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  githubId: ID
}
`