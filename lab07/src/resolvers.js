import { getTodos, getUsers } from "./services/JsonPlaceholder.js";

export const resolvers = {
  Query: {
    users: () => getUsers(),
    todos: () => getTodos(),
    user: async (parent, args) => {
      const id = parseInt(args.id);
      const users = await getUsers();
      const found_user = users.find(user => user.id === id);
      return found_user;
    },
    todo: async (parent, args) => {
      const id = parseInt(args.id);
      const todos = await getTodos();
      return todos.find(todo => todo.id === id);
    },
  },
  User: {
    todos: async parent => {
      const todos = await getTodos();
      const user_todos = todos.filter(todo => todo.userId === parent.id);
      return user_todos;
    },
  },
  ToDoItem: {
    user: async parent => {
      const users = await getUsers();
      const user = users.find(user => user.id === parent.userId);
      return user;
    },
  },
};
