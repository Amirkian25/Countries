<template>
    <div>
      <div class="relative rounded-md shadow-md">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
          <MagnifyingGlassIcon class="h-5 w-5 dark:text-whiteThem text-darkGray" aria-hidden="true" />
        </div>
        <input type="text" name="country" id="country" class="block w-full rounded-md dark:bg-darkBlue border-0 py-3 pl-14 dark:text-whiteThem  outline-none placeholder:text-darkGray dark:placeholder:text-whiteThem  sm:text-sm sm:leading-6" placeholder="Search for a country..." />
      </div>
    </div>
  </template>
  
  <script setup>
  import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
  </script>