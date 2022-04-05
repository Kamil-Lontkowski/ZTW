<script>
import { authorsService } from "../api/authorsService";
export default {
  props: {
    addBook: Function,
  },
  setup() {
    return {
      autorsService: new authorsService(),
    };
  },
  data() {
    return {
      isLoading: false,
      authors: [],
      title: "",
      pages: 0,
      selectedAuthorId: -1,
      errorMsg: "",
    };
  },
  methods: {
    async getAuthors() {
      this.isLoading = true;
      const authors = await this.autorsService.getAllAuthors();
      this.authors = authors;
      this.isLoading = false;
    },
    async handleAddBook(e) {
      e.preventDefault();
      if (!this.isValid()) return;

      await this.addBook({
        id: Math.floor(Date.now()/1000),
        title: this.title,
        pages: this.pages,
        author: this.authors.find((a) => a.id == this.selectedAuthorId),
      });
      this.cleanForm();
    },
    isValid() {
      this.errorMsg = "";
      if (this.title.length < 3) {
        this.errorMsg = "Tytół musi mieć conajmnie 3 zanki";
        return false;
      }

      if (this.authors.findIndex((e) => e.id == this.selectedAuthorId) < 0) {
        this.errorMsg = "Musisz wybrać autora";
        return false;
      }

      return true;
    },
    cleanForm() {
      this.title = "";
      this.pages = 0;
      this.selectedAuthorId = -1;
    },
  },
  mounted() {
    this.getAuthors();
  },
};
</script>
<template>
  <form>
    <fieldset>
      <legend v-if="isLoading">
        Dodaj książki
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </legend>
      <legend v-else>Dodaj książki</legend>
      <div class="mb-3">
        <label for="title" class="form-label">Tytół</label>
        <input
          type="text"
          class="form-control"
          id="title"
          aria-describedby="emailHelp"
          v-model="title"
        />
      </div>
      <div class="mb-3">
        <label for="pages-count" class="form-label">Ilość stron</label>
        <input
          type="number"
          min="0"
          class="form-control"
          id="pages-count"
          aria-describedby="emailHelp"
          v-model="pages"
        />
      </div>
      <div v-if="isLoading" class="mb-3">
        <label for="authorSelect" class="form-label">Wybierz autora </label>
        <select id="authorSelect" class="form-select" disabled></select>
      </div>
      <div v-else class="mb-3">
        <label for="authorSelect" class="form-label">Wybierz autora</label>
        <select
          id="authorSelect"
          class="form-select"
          v-model="selectedAuthorId"
        >
          <option v-for="author in authors" :key="author.id" :value="author.id">
            {{ author.firstName + " " + author.lastName }}
          </option>
        </select>
      </div>
      <div v-if="errorMsg.length > 0" class="alert alert-warning" role="alert">
        {{ errorMsg }}
      </div>
      <button v-if="isLoading" type="submit" class="btn btn-primary" disabled>
        Dodaj
      </button>
      <button
        v-else
        type="submit"
        class="btn btn-primary"
        @click="handleAddBook"
      >
        Dodaj
      </button>
    </fieldset>
  </form>
</template>
