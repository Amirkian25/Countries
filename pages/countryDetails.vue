
<template>
  <main class="mx-auto max-w-7xl p-4 mt-20 md:mt-16 sm:p-6 lg:p-8">
    <div class="mx-auto max-w-2xl flex flex-col  gap-y-12 lg:max-w-none">
      <Loading  v-if="loading"/>
      <!-- Country -->
      <template v-else>
        <div>
          <RouterLink
            to="/"
            class="inline-flex items-center gap-x-2 rounded-md dark:text-whiteThem text-veryDarkBlue bg-white dark:bg-darkBlue bg-whit px-6 py-2.5 text-sm font-semibold shadow-md"
          >
            <ArrowLeftIcon class="-ml-0.5 h-5 w-5" aria-hidden="true" />
            Back
          </RouterLink>
        </div>
        <div
          v-if="country"
          class="lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-20"
        >
          <!-- Image Country -->
          <TabGroup as="div" class="flex flex-col-reverse">
            <TabPanels class="aspect-h-1 aspect-w-1 w-full">
              <TabPanel>
                <img
                  :src="country.flags.png"
                  :alt="country.flags.alt"
                  class="h-full w-full object-cover object-center sm:rounded-lg"
                />
              </TabPanel>
            </TabPanels>
          </TabGroup>
          <!-- Country info -->
          <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1
              class="text-4xl font-extrabold tracking-tight dark:text-whiteThem text-veryDarkBlue"
            >
              {{ country.name.common }}
            </h1>
            <div class="mt-10 flex flex-col gap-y-10 sm:gap-y-0 sm:flex-row ">
              <h2 class="sr-only">Product information</h2>
              <div class="flex flex-1 gap-y-3 flex-col justify-end">
                <p class="text-sm font-semibold dark:text-whiteThem text-veryDarkBlue">
                  Native Name :
                  <span
                    v-for="(value, key) in country.name.nativeName"
                    class="font-normal mr-2"
                  >
                    {{ value.common }}
                  </span>
                </p>
                <p class="text-sm font-semibold dark:text-whiteThem text-veryDarkBlue">
                  Population :
                  <span class="font-normal"> {{ country.population }} </span>
                </p>
                <p class="text-sm font-semibold dark:text-whiteThem text-veryDarkBlue">
                  Region : <span class="font-normal"> {{ country.region }} </span>
                </p>
                <p class="text-sm font-semibold dark:text-whiteThem text-veryDarkBlue">
                  Sub Region :
                  <span class="font-normal">{{ country.subregion }}</span>
                </p>
                <p class="text-sm font-semibold dark:text-whiteThem text-veryDarkBlue">
                  Capital :
                  <span class="font-normal">{{
                    capitalHandel(country.capital)
                  }}</span>
                </p>
              </div>
              <div class="flex flex-1 gap-y-3 flex-col">
                <!-- <p class="text-sm font-semibold dark:text-white text-veryDarkBlue">
                  Top Level Domain :
                  <span class="font-normal"></span>
                </p> -->
                <p class="text-sm font-semibold dark:text-whiteThem text-veryDarkBlue">
                  Currencies :
                  <span
                    v-for="(value, key) in country.currencies"
                    class="font-normal"
                    >{{ value.name }}</span
                  >
                </p>
                <p class="text-sm font-semibold dark:text-whiteThem text-veryDarkBlue">
                  Languages :

                  <span
                    v-for="(value, key) in country.languages"
                    class="font-normal mr-2"
                    >{{ value }}</span
                  >
                </p>
              </div>
            </div>
            <div class="mt-20 flex">
              <h2 class="sr-only">Product information</h2>
              <div v-if="country.borders" class="flex flex-1 flex-col sm:items-center sm:flex-row ">
                <p
                  class="text-sm mb-4 sm:mb-0 sm:mr-4 font-semibold dark:text-whiteThem text-veryDarkBlue"
                >
                  Border Countries :
                </p>
                <div class="gap-x-2 flex ">
                  <button
                    v-for="(item, index) in country.borders"
                    :key="index"
                    type="button"
                    @click="goToPage(item)"
                  >
                    <p
                      class="font-normal text-xs shadow-md dark:text-whiteThem text-veryDarkBlue dark:bg-darkBlue bg-whiteThem px-4 py-2 rounded-sm"
                    >
                      {{ item }}
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Empty v-else />
      </template>
    </div>
  </main>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import axios from "axios";
import { TabGroup, TabPanel, TabPanels } from "@headlessui/vue";
import Loading from "../components/loading/Loading.vue"
import { ArrowLeftIcon } from "@heroicons/vue/20/solid";
import Empty from "../components/UI/Empty.vue";
const route = useRoute();
const router = useRouter();
const country = ref([]);
const loading = ref(false);
async function goToPage(params) {
  await router.push(`/${params}`);
  getCountry();
}
function capitalHandel(params) {
  if (params) {
    return params.toString();
  }
}
function getCountry() {
  loading.value = true;
  axios
    .get(`https://restcountries.com/v3.1/alpha/${route.params.id}`)
    .then(function (response) {
      // handle success
      country.value = response.data[0];
      console.log(country.value);
      loading.value = false;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      loading.value = false;
      // always executed
    });
}

onBeforeMount(() => {
  getCountry();
});
</script>
