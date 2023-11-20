<script setup>
useHead({
    titleTemplate: (title) => title ? `${title} | countries` : "Countries",
})
</script>

<template>
  <LayoutHeader />
  <main>
    <RouterView v-slot="{ Component }">
            <Component :is="Component" />
    </RouterView>
</main>
</template>
<style>
/* Scrollbar */
* { scrollbar-color: #3b6a70 #e2e8f0; }
</style>
