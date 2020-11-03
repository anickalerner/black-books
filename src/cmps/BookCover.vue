<template>
  <div className="book-cover-container">
    <img :src="book.thumbnail" :class="imgClass" alt="Book cover" />
    <img v-if="book.listPrice.isOnSale" :src="onSaleImg" class="onsale-overlay" />    
  </div>
</template>

<script>
export default {
  props: ['book', 'imgClass'],
  computed: {
      onSaleImg() {
      return require(`@/assets/img/on_sale_overlay.png`);
    },
  }
};
</script>