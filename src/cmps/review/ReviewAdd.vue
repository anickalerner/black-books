<template>
  <section class="container shadow-box padding-15">
    <b-form @submit.prevent="addReview" @reset.prevent="onReset">
      <b-button-close @click="onClose" />
      <b-form-group
        id="author-group"
        label="Review author"
        label-for="author"
        description="Your name"
      >
        <b-form-input
          id="author"
          v-model="newReview.author"
          type="text"
          required
          placeholder="Book reviewer's name"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="text-group"
        label="Review content"
        label-for="text"
        description="Review content"
      >
        <b-form-textarea
          id="text"
          v-model="newReview.text"
          required
          placeholder="Your opinion of this book"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
      <b-form-group
        id="rating-group"
        label="Your rating"
        label-for="rating"
        description="Book's rating"
        class="book-rating"
      >
        <b-form-rating
          id="rating"
          v-model="newReview.rating"
          variant="warning"
        ></b-form-rating>
      </b-form-group>
      <b-form-group id="date" label="Review date" label-for="date" class="review-date">
        <b-form-datepicker
          id="date"
          v-model="newReview.date"
        ></b-form-datepicker>
      </b-form-group>
      <b-button type="submit">Submit a review</b-button>
      <!-- <b-button type="submit">Reset</b-button> -->
    </b-form>
  </section>
</template>

<script>
import eventBus from "@/services/eventBus.service";

export default {
  data() {
    return {
      bookId: "",
      newReview: {},
    };
  },
  computed: {},
  created() {
    this.newReview = this.getEmptyReview();
    this.bookId = this.$route.params.id;
  },
  methods: {
    getEmptyReview() {
      return {
        author: "",
        text: "",
        rating: 0,
        date: new Date(Date.now()),
      };
    },
    onClose() {
      this.$router.push(`/book/${this.bookId}`);
    },
    onReset() {
      this.newReview = this.getEmptyReview();
    },
    addReview() {
      this.newReview.date = new Date(this.newReview.date);
      eventBus.$emit("reviewAdded", this.newReview);
      this.onClose();
    },
  },
};
</script>