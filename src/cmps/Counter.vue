<template>
    <section class="counter-container">
        <button @click="inc">{{valForDisplay}}</button>
    </section>
</template>

<script>
export default {
    props: ['initVal', 'onInc'],
    data() {
        return {
            val: this.initVal
        }
    },
    methods: {
        inc() {
            this.val++
            this.$emit('inc', this.val)
        }
    },
    computed : {
        valForDisplay() {
            return this.val.toLocaleString()
        }
    }
}
</script>