<script>
//console.log(booksList);
export default {
  props: {
    booksList: Array,
    deleteBook: Function,
  },
};
</script>
<template>
  <div>
    <table class="table">
      <thead>
        <th>Id</th>
        <th>Tytół</th>
        <th>Autor</th>
        <th>Ilość stron</th>
        <th>Akcje</th>
      </thead>
      <tbody>
        <tr v-for="book in booksList" :key="book.id">
          <td>{{ book.id }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.author.firstName + book.author.lastName }}</td>
          <td>{{ book.pages }}</td>
          <td>
            <router-link
              type="button"
              class="btn btn-primary"
              :to="{ path: '/books/' + book.id }"
              >Szczegóły</router-link
            >
            <button
              type="button"
              class="btn btn-danger"
              @click="() => deleteBook(book.id)"
            >
              Usuń
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
