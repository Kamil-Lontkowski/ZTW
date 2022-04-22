const typeDefinitions = /* GraphQL */ `
  type User {
    id: ID!
    name: String!
    email: String!
    phone: String!
    website: String!
    username: String!
    company: Company
    todos: [ToDoItem!]!
  }

  type ToDoItem {
    id: ID!
    title: String!
    completed: Boolean!
    user: User!
  }

  type Company {
    name: String!
    catchPhrase: String!
    bs: String!
  }

  type Query {
    todos: [ToDoItem!]
    todo(id: ID!): ToDoItem
    users: [User!]
    user(id: ID!): User
  }
`;

export default typeDefinitions;
