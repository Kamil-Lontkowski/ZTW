import fetch from "node-fetch";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getTodos() {
  const result = await fetch(`${BASE_URL}/todos`);
  return await result.json();
}

export async function getUsers() {
  const result = await fetch(`${BASE_URL}/users`);
  return await result.json();
}
