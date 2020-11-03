<template>
<div>
  <b-card
    :title="book.title"
    img-alt="Cover"
    img-top
    tag="article"    
    class="mb-2"
  >
  <router-link :to="getBookLink"><book-cover :book="book" imgClass="card-img-top"/></router-link>
    <b-card-text>
     <book-authors :authors="book.authors" />
      <book-price :price="book.listPrice" />  
    </b-card-text>
    <b-button @click="$router.push(`/book/edit/${book.id}`)">Edit</b-button>
  </b-card>
</div>
</template>

<script>
import BookCover from "@/cmps/BookCover.vue";
import BookTitle from "@/cmps/BookTitle.vue";
import BookAuthors from "@/cmps/BookAuthors.vue";
import BookPrice from "@/cmps/BookPrice.vue";

export default {
  props: ["book"],
  created() {},
  components: {
    BookCover,
    BookTitle,
    BookAuthors,
    BookPrice,
  },
  computed:{
    getBookLink(){
      return `/book/${this.book.id}`;
    }
  }
};
</script>