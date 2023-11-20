<template>
  <div
    class="mx-auto max-w-7xl mt-20 md:mt-16 gap-y-12 flex flex-col p-4 sm:p-6 lg:p-8"
  >
    <div
      class="gap-y-8 md:gap-y-0 flex flex-col md:flex-row md:justify-between md:items-center"
    >
      <div class="md:w-[500px]">
        <div>
          <div class="relative rounded-md shadow-md">
            <div
              class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5"
            >
              <MagnifyingGlassIcon
                class="h-5 w-5 dark:text-whiteThem text-darkGray"
                aria-hidden="true"
              />
            </div>
            <input
              type="text"
              v-model="search"
              @input="searchHandel"
              name="country"
              id="country"
              class="block w-full rounded-md dark:bg-darkBlue border-0 py-3 pl-14 dark:text-whiteThem outline-none placeholder:text-darkGray dark:placeholder:text-whiteThem sm:text-sm sm:leading-6"
              placeholder="Search for a country..."
            />
          </div>
        </div>
      </div>
      <div class="w-[200px] md:w-[180px]">
        <UISelect @selected="getCountries" />
      </div>
    </div>
    <div>
      <LoadingLoading v-if="loading" />
      <CountryCard v-else :countries="countries" />
    </div>
  </div>
</template>

<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/20/solid";
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
const countries = ref([]);
const loading = ref(false);
const region = ref("all");
const route = useRoute();
const search = ref("");
function getCountries(params) {
  if (params) {
    region.value = params.id;
    search.value = "";
  }
  loading.value = true;
  axios
    .get(
      `https://restcountries.com/v3.1${
        search.value
          ? `/name/${search.value}`
          : region.value === "all"
          ? `/all`
          : `/region/${region.value}
         `
      }`
    )
    .then(function (response) {
      // handle success
      console.log(response);
      countries.value = response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      countries.value = [];
    })
    .finally(function () {
      // always executed
      loading.value = false;
    });
}
function searchHandel() {
  getCountries();
}
useHead({ title: "" });
onBeforeMount(() => {
  if (route.query.region) {
    region.value = route.query.region;
  }
  getCountries();
});
</script>

<style lang="scss" scoped></style>
