<template>
  <div>
    yee
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Tytol</th>
          <th scope="col">Autor</th>
          <th scope="col">Strony</th>
        </tr>
      </thead>
    </table>
  </div>
</template>
<script>
export default {
  name: "books-list",
  props: {
    booksList: Array,
  },
};
</script>
