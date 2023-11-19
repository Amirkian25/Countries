<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/layout/Header.vue";
</script>

<template>
  <Header />
  <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
     <RouterLink to="/about">About</RouterLink> 
      </nav> -->
  <RouterView />
</template>
