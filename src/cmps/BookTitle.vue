<template>
    <h5 class="card-title">{{title}}</h5>
</template>

<script>
export default {
    props: ['title']
}
</script>
<style lang="scss">
.card-title{
    min-height: 2.5em;
}
</style>