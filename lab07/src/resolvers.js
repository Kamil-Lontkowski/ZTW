import { getTodos, getUsers } from "./services/JsonPlaceholder.js";

export const resolvers = {
  Query: {
    users: () => getUsers(),
    todos: () => getTodos(),
    user: async (parent, args, context, info) => {
      const id = parseInt(args.id);
      const users = await getUsers();
      const found_user = users.find((user) => user.id === id);
      return found_user;
    },
    todo: async (parent, args, context, info) => {
      const id = parseInt(args.id);
      const todos = await getTodos();
      return todos.find((todo) => todo.id === id);
    },
  },
};
