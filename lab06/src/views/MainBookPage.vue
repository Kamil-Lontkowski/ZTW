<script>
import BookList from "../components/BookList.vue";
import AddBookForm from "../components/AddBookForm.vue";
import { booksService } from "../api/booksService";

export default {
  setup() {
    return { booksService: new booksService() };
  },
  data() {
    return {
      books: [],
      loading: false,
    };
  },
  components: {
    BookList,
    AddBookForm,
  },
  methods: {
    async getBooks() {
      this.loading = true;
      const books = await this.booksService.getAllBooks();
      this.books = books;
      this.loading = false;
    },
    async deleteBook(bookId) {
      try {
        await this.booksService.deleteBookById(bookId);
        this.books = this.books.filter(({ id }) => id != bookId);
      } catch (e) {
        console.error(e);
      }
    },
    async addBook(book) {
      console.log(book);
      const { author, ...bookDto } = book;
      bookDto.authorId = author.id;
      try {
        this.booksService.addBook(bookDto);
        this.books.push(book);
      } catch (e) {
        console.error(e);
      }
    },
  },
  mounted() {
    this.getBooks();
  },
};
</script>
<template>
  <div class="books-page">
    <div class="row justify-content-center">
      <AddBookForm class="col-md-6" :addBook="addBook" />
    </div>
    <div class="row justify-content-center">
      <div class="col-md-3"></div>
      <h3 v-if="books" class="col-md-6">
        Ilość książek: {{ this.books.length }}
      </h3>
      <div class="col-md-3"></div>
      <BookList
        v-if="!loading"
        class="col-md-6"
        :booksList="books"
        :deleteBook="deleteBook"
      />
      <div v-else class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>
<style>
.books-page {
  margin-top: 2rem;
}
</style>
