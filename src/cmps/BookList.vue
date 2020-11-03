<template>
  <div class="card-grid">
    <book-preview :book="book" v-for="book in books" :key="book.id" @click.native="clicked(book.id)"/>
  </div>
</template>

<script>
import BookPreview from "@/cmps/BookPreview.vue";
export default {
  props: ["books"],
  components: {
    BookPreview
  },
  methods:{
    clicked(id){
      this.$emit('selected', id);
    }
  }
};
</script>