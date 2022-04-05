<script>
import BookList from "../components/BookList.vue";
const books = [
  {
    id: 1,
    title: "Potop",
    author: {
      id: 1,
      firstName: "Henryk",
      lastName: "Sienkiewicz",
    },
    pages: 936,
  },
  {
    id: 2,
    title: "Wesele",
    author: {
      id: 2,
      firstName: "Stanisław",
      lastName: "Reymont",
    },
    pages: 150,
  },
  {
    id: 3,
    title: "Dziady",
    author: {
      id: 3,
      firstName: "Adam",
      lastName: "Mickiewicz",
    },
    pages: 292,
  },
];
</script>
<template>
  Main book page 2
  <BookList :books="books" />
</template>
