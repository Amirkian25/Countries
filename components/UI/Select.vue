<template>
  <Listbox as="div" v-model="selected">
    <div class="relative mt-2">
      <ListboxButton
        class="relative w-full cursor-default rounded-md dark:bg-darkBlue bg-whiteThem py-3 pl-3 pr-10 text-left dark:text-whiteThem text-veryDarkBlue shadow-md focus:outline-none sm:text-sm sm:leading-6"
      >
        <span class="block truncate">{{ selected.name }}</span>
        <span
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
        >
          <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute z-10 mt-1 max-h-60 w-full overflow-auto font-medium rounded-md dark:bg-darkBlue bg-whiteThem dark:text-whiteThem text-veryDarkBlue py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          <ListboxOption
            as="template"
            v-for="region in regions"
            :key="region.id"
            :value="region"
            v-slot="{ active, selected }"
          >
            <li
              :class="[
                active
                  ? 'bg-indigo-600 text-whiteThem'
                  : 'dark:text-whiteThem text-veryDarkBlue',
                'relative cursor-default select-none py-2 pl-3 pr-9',
              ]"
            >
              <span
                :class="[
                  selected ? 'font-semibold' : 'font-normal',
                  'block truncate',
                ]"
                >{{ region.name }}</span
              >

              <span
                v-if="selected"
                :class="[
                  active ? 'text-whiteThem' : 'text-indigo-600',
                  'absolute inset-y-0 right-0 flex items-center pr-4',
                ]"
              >
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup>
import { ref, watch , onBeforeMount } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";

import { useRoute, useRouter } from "vue-router";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";
const emits = defineEmits(["selected"]);
const regions = [
  { id: "all", name: "All Regions" },
  { id: "africa", name: "Africa" },
  { id: "america", name: "America" },
  { id: "Asia", name: "Asia" },
  { id: "europe", name: "Europe" },
  { id: "oceania", name: "Oceania" },
];
const route = useRoute();
const router = useRouter();
const selected = ref(regions[0]);

watch(selected, () => {
  router.push({ query: { region: String(selected.value.id) } });
  emits("selected", selected.value);
});
onBeforeMount(() => {
  if (route.query.region) {
    selected.value = regions.find(i => i.id === route.query.region )
  }
});
</script>
