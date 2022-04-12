const typeDefinitions = /* GraphQL */ `
  type User {
    id: ID!
    name: String!
    email: String!
    login: String!
    todos: [ToDoItem!]!
  }

  type ToDoItem {
    id: ID!
    title: String!
    completed: Boolean!
    user: User!
  }

  type Query {
    todos: [ToDoItem!]
    todo(id: ID!): ToDoItem
    users: [User!]
    user(id: ID!): User
  }
`;

export default typeDefinitions;
