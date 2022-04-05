<script>
import { authorsService } from "../api/authorsService";
export default {
  name: "book-detail",
  props: {
    book: Object,
  },
  setup() {
    return {
      autorsService: new authorsService(),
    };
  },
  data() {
    return {
      authors: [],
    };
  },
  methods: {
    async getAuthors() {
      this.isLoading = true;
      const authors = await this.autorsService.getAllAuthors();
      this.authors = authors;
      this.isLoading = false;
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
        <input class="form-control" type="text" :placeholder="book.title" />
      </div>
      <div class="form-group m">
        <label>Number of pages</label>
        <input class="form-control" type="text" :placeholder="book.pages" />
      </div>
      <div class="form-group m">
        <label>Author</label>
      </div>
      <button class="btn btn-primary m">Nothing</button>
    </form>
  </div>
</template>

<style>
.m {
  margin: 10px;
}
</style>


