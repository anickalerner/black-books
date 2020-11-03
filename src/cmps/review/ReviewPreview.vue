<template>
  <b-card
    :title="review.author"
    :sub-title="getDate"
    class="review-preview soft-box shadow-box"
  >
    <b-button-close @click="onDelete" />
    <b-card-text>
      {{ review.rating }}
    </b-card-text>
    <b-card-text>
      {{ review.text }}
    </b-card-text>
  </b-card>
</template>
<script>
import { utils } from "@/services/utils.service";
import eventBus from "@/services/eventBus.service";
export default {
  props: ["review"],
  computed: {
    getDate() {
      return utils.getFormattedDate(this.review.date);
    },
  },
  methods: {
    onDelete() {
      this.$emit("deleteReview", this.review.id);
    },
  },
};
</script>