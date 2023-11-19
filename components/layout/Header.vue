<template>
  <nav
    class="dark:bg-darkBlue fixed  right-0 left-0 top-0 z-50 bg-whiteThem shadow"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between">
        <div class="flex items-center">
          <h1 class="text-2xl dark:text-whiteThem text-veryDarkBlue font-bold">
            Where in the world?
          </h1>
        </div>
        <div class="ml-6 flex items-center">
          <button
            type="button"
            @click="switchMode"
            class="relative flex gap-x-2 p-1 dark:text-whiteThem font-semibold text-veryDarkBlue focus:outline-none"
          >
            <span class="absolute -inset-1.5" />
            <span class="sr-only">View notifications</span>
            <MoonIcon v-if="darkMode" class="h-6 w-6" aria-hidden="true" />
            <SunIcon v-else class="h-6 w-6" aria-hidden="true" />
            {{ darkMode ? "Dark Mode" : "Light Mode" }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import { MoonIcon, SunIcon } from "@heroicons/vue/24/outline";

const darkMode = ref(undefined);
function switchMode() {
  darkMode.value = !darkMode.value;
  getMode();
}
function getMode() {
  if (darkMode.value) {
    localStorage.setItem("darkMode", "true");
    window.document.documentElement.classList.add("dark");
  } else if (darkMode.value === false) {
    localStorage.setItem("darkMode", "false");
    window.document.documentElement.classList.remove("dark");
  } else {
    darkMode.value = localStorage.getItem("darkMode") === "true";
    if (darkMode.value) {
      window.document.documentElement.classList.add("dark");
    } else {
      window.document.documentElement.classList.remove("dark");
    }
  }
}

onBeforeMount(() => {
  getMode();
});
</script>
