<script setup>
import {  RouterView } from "vue-router";
import Header from "./components/layout/Header.vue";
useHead({
    titleTemplate: (title) => title ? `${title} | Countries` : "Countries",
})
</script>

<template>
  <Header />
  <RouterView />
</template>
