<template>
    <p :class="getClassName">{{getLocale}}</p>
</template>

<script>
export default {
  props: ['price'],
  computed: {
    getClassName() {
      var price = +this.price.amount;
      if (price > 150) return "expensive";
      else if (price < 20) return "cheep";
      return "";
    },
    getLocale(){
        return this.price.amount.toLocaleString('en-IN', { style: 'currency', currency: this.price.currencyCode })
    }
  },
};
</script>
<style lang="scss">
.expensive{
    color: red;
    font-weight: bold;
}
.cheep{
    color: #34A853;
    font-weight: bold;
}
</style>