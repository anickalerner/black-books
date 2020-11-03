<template>
  <section class="container" v-if="book">
    <div class="card mb-3 book-details">
      <div class="row no-gutters">
        <div class="col-md-4">
          <book-cover :book="book" imgClass="card-img" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <b-button-close @click="goBack">Go back</b-button-close>
            <book-title :title="book.title" />
            <book-authors :authors="book.authors" />
            <book-price :price="book.listPrice" />
            <p>{{ book.subtitle }}</p>
            <book-age :publishedDate="book.publishedDate" />
            <LongText :txt="book.description" />
            <book-page-count :pages="book.pageCount" />
            <p>Categories: {{ book.categories.join(", ") }}</p>
            <p>Language: {{ book.language }}</p>
            <p v-if="book.listPrice.isOnSale">On sale!</p>
        <div class="flex flex-end prevnext">
          <button :disabled="isPrevDisabled" @click="goToPrev">Prev</button>
          <button :disabled="isNextDisabled" @click="goToNext">Next</button>
        </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex space-between">
      <h4>Reader reviews</h4>
      <router-link :to="`/book/${book.id}/addreview`">Add a review</router-link>
    </div>
    <router-view />
    <review-list
      v-if="book.reviews"
      :reviews="book.reviews"
      @deleteReview="deleteReview"
    />
  </section>
</template>

<script>
import { bookService } from "@/services/book.service";
import eventBus from "@/services/eventBus.service";
import BookCover from "@/cmps/BookCover.vue";
import BookTitle from "@/cmps/BookTitle.vue";
import BookAuthors from "@/cmps/BookAuthors.vue";
import BookPrice from "@/cmps/BookPrice.vue";
import BookAge from "@/cmps/BookAge.vue";
import LongText from "@/cmps/LongText.vue";
import BookPageCount from "@/cmps/BookPageCount.vue";
import ReviewList from "@/cmps/review/ReviewList";

export default {
  data() {
    return {
      book: null,
      prevNext: {},
    };
  },
  computed: {
    isPrevDisabled() {
      return this.book.id === this.prevNext.prev;
    },
    isNextDisabled() {
      return this.book.id === this.prevNext.next;
    },
  },
  async mounted(){
      if (!this.$store.getters.books){
        this.$store.dispatch({type:'loadBooks'})
      }
  },
  async created() {
    await this.updateView();
    eventBus.$on("reviewAdded", async (review) => {
      await bookService.addReview(this.book.id, review);
      eventBus.$emit("showMsg", `A review was added to ${this.book.title}`);
      this.updateView();
    });
  },
  methods: {
    async updateView() {
      const id = this.$route.params.id;
      this.book = await this.$store.dispatch({ type: "getBook", id });
      this.prevNext = await bookService.getPrevNext(this.book.id);
    },
    goBack() {
      this.$router.push("/book");
    },
    async deleteReview(reviewId) {
      const indToRemove = this.book.reviews.findIndex(
        (review) => review.id === reviewId
      );
      this.book.reviews.splice(indToRemove, 1);      
      var bookToUpdate = JSON.parse(JSON.stringify(this.book));
      await this.$store.dispatch({ type: "saveBook", book: bookToUpdate });
      eventBus.$emit("showMsg", `A review was deleted from ${this.book.title}`);
      this.updateView();
    },
    goToNext() {
      this.$router.push(`/book/${this.prevNext.next}`);
    },
    goToPrev() {
      if (this.book.id !== this.prevNext.prev)
        this.$router.push(`/book/${this.prevNext.prev}`);
    },
  },
  watch: {
    "$route.params.id": function () {
      this.updateView();
    },
  },
  components: {
    BookCover,
    BookTitle,
    BookAuthors,
    BookPrice,
    BookAge,
    LongText,
    BookPageCount,
    ReviewList,
  },
};
</script>