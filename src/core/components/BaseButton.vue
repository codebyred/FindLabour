<script setup>
const props = defineProps(['className','btnValue']);

</script>

<template>

<input
    type="button"
    @click="$emit('goto')"
    class="btn"
>

</template>

<style scoped>
.btn{
    font-size: 1rem;
    border: 1px solid var(--color-base-button);
    padding: 10px 15px;
    border-radius: 10px;
    background:#7743DB;
    color:white;
}
</style>