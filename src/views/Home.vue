<template>
  <section class="home">
    <div class="hero">
      <p>Welcome to Black Books</p>
    </div>
    <div class="home-content">
      <div class="flex space-between">
        <h1>Our books</h1>
        <div class="list-link"><router-link to="/book">See more</router-link></div>
      </div>
      <book-list :books="topBooks" />
    </div>
  </section>
</template>

<script>
import { bookService } from "@/services/book.service";
import BookList from "@/cmps/BookList.vue";
export default {
  async created() {
    this.loadBooks();
  },
  methods: {
    async loadBooks(){
      this.$store.dispatch({ type: 'loadBooks' });
    }
  },
  computed: {
    topBooks() {
      return this.$store.getters.topBooks;
    },
  },
  components: {
    BookList
  },
};
</script>
<style lang="scss">
.home-content {
  padding: 20px;
  text-align: center;
  h1{
    text-align: left;
  }
 .card-grid{
    display: flex;
    justify-content:space-evenly;
    .book-card{
      max-width: 22%;
      .footer{
        display: none;
      }
    }
  }
}
</style>
