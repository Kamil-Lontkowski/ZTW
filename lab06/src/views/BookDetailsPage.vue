<script>
import { booksService } from "../api/booksService";
import BookDetail from "../components/BookDetail.vue"
import { useRouter } from 'vue-router';

export default {
  setup() {
    const id = useRouter().currentRoute.value.params.id
    return { booksService: new booksService(),
             id: id  };
  },
  data() {
    return {
      book: {},
      loading: false,
    };
  },
  components: {
    BookDetail,
  },
  methods: {
    async getBook() {
      this.loading = true;
      const book = await this.booksService.getBookById(this.id);
      this.book = book;
      this.loading = false;
    },
  },
  mounted() {
    this.getBook();
  },
};
</script>
<template>  

  <book-detail :book="book"/>
  
</template>
