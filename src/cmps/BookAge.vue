<template>
  <p>
    Published on {{ publishedDate }}. <u>{{getBookAgeText}}</u>
  </p>
</template>

<script>
export default {
  props: ["publishedDate"],
  computed: {
    getBookAgeText() {
      var year = +this.publishedDate;
      var yearDiff = new Date().getFullYear() - year;
      if (yearDiff > 10) return "Veteran book";
      else if (yearDiff < 1) return "New Book!";
      return "";
    },
  },
};
</script>
