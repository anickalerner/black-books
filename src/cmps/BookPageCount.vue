<template>
  <p>{{pages}} pages. <u>{{getPageCountText}}</u></p>
</template>

<script>
export default {
  props: ["pages"],
  computed: {
    getPageCountText() {
      var count = +this.pages;
      if (count > 500) return "Long reading";
      else if (count > 200) return "Decent reading";
      else if (count < 100) return "Light reading";
      return "";
    },
  },
};
</script>