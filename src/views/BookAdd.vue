<template>
  <section class="container">
    <input
      type="text"
      placeholder="Search for a book"
      v-model="filterBy.txt"
      @input="searchGoogle"
    />
    <div class="suggestions" v-if="bookSuggestions">
      <div v-for="book in bookSuggestions" :item="book" :key="book.id">
        {{ book.volumeInfo.title }}
        <b-button
          size="sm"
          class="mb-2"
          @click.prevent="() => addGoogleBook(book)"
        >
          <b-icon-plus aria-label="Add book" />
        </b-button>
      </div>
    </div>
  </section>
</template>

<script>
import { googleBooksService } from "@/services/google.books.service";
import { bookService } from "@/services/book.service";
import eventBus from "@/services/eventBus.service";
import { BIconPlus } from "bootstrap-vue";

export default {
  data() {
    return {
      filterBy: {
        txt: "",
      },
      bookSuggestions: [],
    };
  },
  methods: {
    async searchGoogle() {
      if (this.filterBy.txt.length >= 3) {
        this.bookSuggestions = await googleBooksService.searchGoogleBooks(
          this.filterBy.txt
        );
      }
    },
    addGoogleBook(book) {
      var googleBook = bookService.formatGoogleBook(book);
      this.$store.dispatch({type:'saveBook', book: googleBook})
      eventBus.$emit("showMsg", `${googleBook.title} was saved`);
      this.$router.push("/book");
    },
  },
  components: {
    BIconPlus,
  },
};
</script>