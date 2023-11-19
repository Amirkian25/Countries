<template>
  <div
    class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-12"
  >
    <div
      v-if="countries.length"
      v-for="country in countries"
      :key="country.cioc"
      class="group relative flex flex-col overflow-hidden rounded-lg outline-none bg-whiteThem shadow dark:bg-darkBlue"
    >
      <div
        class="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-48"
      >
        <img
          :src="country.flags.png"
          :alt="country.flags.alt"
          class="h-full w-full object-cover object-center sm:h-full sm:w-full"
        />
      </div>
      <div class="flex flex-1 flex-col space-y-5 p-4">
        <h3 class="text-lg font-bold dark:text-whiteThem text-veryDarkBlue">
          <RouterLink :to="`/${country.cioc}`">
            <span aria-hidden="true" class="absolute inset-0" />
            {{ country.name.common }}
          </RouterLink>
        </h3>
        <div class="flex flex-1 gap-y-1 flex-col justify-end">
          <p
            class="text-sm font-semibold dark:text-whiteThem text-veryDarkBlue"
          >
            Population :
            <span class="font-normal">{{ country.population }} </span>
          </p>
          <p
            class="text-sm font-semibold dark:text-whiteThem text-veryDarkBlue"
          >
            Region : <span class="font-normal">{{ country.region }}</span>
          </p>
          <p
            class="text-sm font-semibold dark:text-whiteThem text-veryDarkBlue"
          >
            Capital :
            <span class="font-normal">{{
              capitalHandel(country.capital)
            }}</span>
          </p>
        </div>
      </div>
    </div>
    <Empty v-else />
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import Empty from "../UI/Empty.vue";
const props = defineProps({
  countries: {
    type: Array,
    default: [],
  },
});
function capitalHandel(params) {
  if (params) {
    return params.toString();
  }
}
</script>
