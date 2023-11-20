<template>
  <div></div>
</template>

<script setup>
import { onBeforeMount } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
onBeforeMount(async () => {
  await router.push("/countries");
});
</script>

<style lang="scss" scoped></style>
