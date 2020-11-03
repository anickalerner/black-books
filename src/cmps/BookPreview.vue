<template>
  <div class="book-card">
    <b-card
      :title="book.title"
      img-alt="Cover"
      img-top
      tag="article"
      class="mb-2"
    >
      <router-link :to="getBookLink"
        ><book-cover :book="book" imgClass="card-img-top"
      /></router-link>
      <div class="card-text">
        <book-authors :authors="book.authors" />
        <book-price :price="book.listPrice" />
      </div>
      <div class="flex space-between">
        <b-button @click="$router.push(`/book/${book.id}`)">Details</b-button>
        <div>
          <b-button
            variant="outline"
            class="btn-edit"
            @click="$router.push(`/book/edit/${book.id}`)"
            ><b-icon-pencil-square aria-label="Edit" title="Edit"
          /></b-button>
          <b-button variant="outline" @click.prevent="() => deleteBook()"
            ><b-icon-trash aria-label="Delete" title="Delete"
          /></b-button>
        </div>
      </div>
    </b-card>
    <b-modal id="modal" v-model="modalShow" title="Delete the book"
      @ok="handleDelete">
      <p class="my-4">{{ getConfirmationText }}</p>
    </b-modal>
  </div>
</template>

<script>
import BookCover from "@/cmps/BookCover.vue";
import BookTitle from "@/cmps/BookTitle.vue";
import BookAuthors from "@/cmps/BookAuthors.vue";
import BookPrice from "@/cmps/BookPrice.vue";
import eventBus from "@/services/eventBus.service";
import { BIconPencilSquare } from "bootstrap-vue";
import { BIconTrash } from "bootstrap-vue";
export default {
  data() {
      return {
        modalShow: false
      }
    },
  props: ["book"],
  created() {},
  components: {
    BookCover,
    BookTitle,
    BookAuthors,
    BookPrice,
    BIconPencilSquare,
    BIconTrash,
  },
  computed: {
    getBookLink() {
      return `/book/${this.book.id}`;
    },
    getConfirmationText(){
      return `Are you sure you want to delete ${this.book.title}?`;
    }
  },
  methods: {
    deleteBook() {
      this.modalShow = true;
    },
    handleDelete(){
      this.$store.dispatch({ type: "removeBook", id: this.book.id });
      eventBus.$emit("showMsg", `${this.book.title} was deleted`);
    }
  },
};
</script>
<style lang="scss">
#modal{
  header{
    background-color: white;
  }
}
</style>