<template>
  <div class="reviews-container flex column">
    <review-preview :review="review" v-for="(review, ind) in reviews" :key="`review-${ind}`" @deleteReview="deleteReview"/>
  </div>
</template>

<script>
import ReviewPreview from "@/cmps/review/ReviewPreview.vue";
export default {
  props: ["reviews"],
  methods:{
    deleteReview(reviewId){
      this.$emit('deleteReview', reviewId);
    }
  },
  components: {
    ReviewPreview
  }
};
</script>
