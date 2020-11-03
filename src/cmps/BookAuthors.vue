<template>
     <p>{{getAuthors}}</p>
</template>

<script>
export default {
    props:['authors'],
    computed: {
        getAuthors(){
            return (this.authors.length > 1) ? this.authors.join(', ') : this.authors[0];
        }
    }
}
</script>