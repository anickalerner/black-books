<template>
  <section class="container">
    <book-filter @filtered="setFilter" />
    <div class="add-book-control flex column">
      <label>Add a book</label>
      <b-form-select
        v-model="addOpton"
        :options="addOptions"
        @input="optionSelected"
      ></b-form-select>
    </div>

    <!-- <router-link to="/book/edit">Add a book</router-link> -->
    <book-list :books="booksToShow" />
  </section>
</template>

<script>
import { bookService } from "@/services/book.service";
import BookList from "@/cmps/BookList.vue";
import BookFilter from "@/cmps/BookFilter.vue";

export default {
  data() {
    return {
      filterBy: {
        txt: "",
        price: 0,
      },
      addOpton: '',
      addOptions:[
        {value: 'manually', text: 'Manually'},
        {value: 'google', text: 'From Google books'}
      ]

    };
  },
  async created() {
    this.loadBooks();
  },
  methods: {
    async loadBooks(){
      this.$store.dispatch({ type: 'loadBooks' });
    },
    setFilter(filterBy) {
      this.$store.commit({type:'setBooksFilterBy', filterBy})
    },
    optionSelected(){
      if (this.addOpton === 'manually') this.$router.push('/book/edit')
      else if (this.addOpton === 'google') this.$router.push('/book/add');
    }
  },
  computed: {
    booksToShow() {
      return this.$store.getters.booksToShow;
    },
  },
  components: {
    BookList,
    BookFilter,
  },
};
</script>