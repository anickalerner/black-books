<template>
    <section class="book-filter">
        <h3>Filter</h3>
        <div><input type="text" placeholder="Search a book" v-model="filterBy.txt" @input="emitFilter" /></div>
        <div class="form-group">
            <label for="priceRange">Price filter</label>
            <input type="range" class="form-control-range" max="200" min="100" id="priceRange" v-model="filterBy.price" @input="emitFilter" />
            <div class="row price-range-labels">
                <span>100</span>
                <span class="priceFilterValue">{{filterBy.price}}</span>
                <span>200</span>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            filterBy: {
                txt: '',
                price: 0
            }
        }
    },
    methods: {
        emitFilter() {
            this.$emit('filtered', this.filterBy)
        }
    }
}
</script>