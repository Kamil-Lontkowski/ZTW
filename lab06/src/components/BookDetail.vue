<script>
import { authorsService } from "../api/authorsService";
import { booksService } from "../api/booksService";
export default {
  name: "book-detail",
  props: {
    book: Object,
  },
  setup() {
    return {
      autorsService: new authorsService(),
      booksService: new booksService(),
    };
  },
  data() {
    return {
      authors: [],
      authorId: 0,
      pages: 0,
      title: "",
    };
  },
  methods: {
    async getAuthors() {
      this.isLoading = true;
      const authors = await this.autorsService.getAllAuthors();
      this.authors = authors;
      this.isLoading = false;
      this.pages = this.book.pages;
      this.title = this.book.title;
    },
    async handleUpdateBook(e) {
      e.preventDefault();
      await this.booksService.updateBook({
        id: this.book.id,
        title: this.title,
        pages: this.pages,
        authorId: this.authorId,
      });
    },
  },
  mounted() {
    this.getAuthors();
  },
};
</script>

<template>
  <div>
    <form>
      <div class="form-group m">
        <label>Title</label>
        <input class="form-control" type="text" v-model="title" :placeholder="book.title"/>
      </div>
      <div class="form-group m">
        <label>Number of pages</label>
        <input class="form-control" type="number" v-model="pages" :placeholder="book.pages" />
      </div>
      <div class="form-group m">
        <label>Author</label>
        <select id="authorSelect" class="form-select" v-model="authorId">
          <option v-for="author in authors" :key="author.id" :value="author.id">
            {{ author.firstName + " " + author.lastName }}
          </option>
        </select>
      </div>
      <button class="btn btn-primary m" @click="handleUpdateBook">
        Update
      </button>
    </form>
  </div>
</template>

<style>
.m {
  margin: 10px;
}
</style>


