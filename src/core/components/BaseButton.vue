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
    font-size: 1.2rem;
    border: 1px solid var(--color-base-button);
    padding: 11px 15px;
    border-radius: 10px;
    background:#7743DB;
    color:white;
}
</style>