<template>
  <section class="container">
    <b-form @submit.prevent="addBook" @reset="onReset" v-if="editBook">
      <b-button-close @click="$router.push('/book')" />
      <b-form-group
        id="title-group"
        label="Book title"
        label-for="title"
        description="Book's title"
      >
        <b-form-input
          id="title"
          v-model="editBook.title"
          type="text"
          required
          placeholder="Title"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="subtitle-group"
        label="Book subtitle"
        label-for="subtitle"
        description="Book's subtitle"
      >
        <b-form-input
          id="subtitle"
          v-model="editBook.subtitle"
          type="text"
          placeholder="Subtitle"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="cover-group"
        label="Book cover"
        label-for="cover"
        description="Book's cover"
      >
      <b-form-input
          id="thumbnail"
          v-model="editBook.thumbnail"
          type="text"          
          placeholder="Thumbnail" readonly
        ></b-form-input>
      <b-form-file v-model="editBook.coverUploaded" class="mt-3" plain></b-form-file>
      <div class="mt-3">Selected file: {{ editBook.coverUploaded ? editBook.coverUploaded.name : '' }}</div>
      </b-form-group>
      <b-form-group
        id="authors-group"
        label="Book author or authors"
        label-for="Authors"
        description="Book's authors"
        class="author-input"
      >
        <div :author="author"
            v-for="(author, ind) in editBook.authors"
            :key="ind">
          <b-form-input
            :id="`author-${ind}`"
            type="text"
            v-model="editBook.authors[ind]" 
            placeholder="Author" :class="{single: ind !== editBook.authors.length-1, withPlus: ind === editBook.authors.length-1}"
            
          ></b-form-input>
          <b-button
            size="md"
            class="mb-2"
            @click.prevent="editBook.authors.push('')" v-if="ind === editBook.authors.length-1"
          >
            <b-icon-plus aria-label="Add author"/>
          </b-button>
        </div>
      </b-form-group>
      <b-form-group id="price-group" label="Book price" label-for="price">
        <b-form-input
          id="price"
          v-model="editBook.listPrice.amount"
          required
          placeholder="Price"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit">{{getButtonText}}</b-button>
    </b-form>
  </section>
</template>
<script>
import { BIconPlus } from 'bootstrap-vue'
import {bookService} from '@/services/book.service'
import eventBus from '@/services/eventBus.service';

export default {
  data() {
    return {
      editBook: null
    };
  },
  async created() {
    const { id } = this.$route.params;
    this.editBook = await this.$store.dispatch({type:'getBook', id});
    console.log(this.editBook);
  },
  methods: {
    onReset(evt) {},
    addBook() {
      this.$store.dispatch({type:'saveBook', book: this.editBook});
      eventBus.$emit('showMsg',`${this.editBook.title} was saved`)
      this.$router.push('/book');
    },
  },
  computed:{
    getButtonText(){
      return this.editBook.id ? 'Edit' : 'Add';
    }
  },
  components: {
    BIconPlus
  }
};
</script>

<style lang="scss">
.author-input {
  input {
    margin-right: 10px;    
    width: 90%;
    &.withPlus{
      float: left;
    }
    &.single{
      margin-bottom: 10px;
    }
  }
}
</style>