<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import axios from 'axios';
import { computed, reactive, ref } from 'vue';

const state = reactive({
    searchProduct: [],
    isLoading: true
})
const searchText = ref('');

 const handleInputChange = computed(async() => {
    if(searchText.value.length > 3){
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/clothes/search?searchTerm=${searchText.value}`);
        state.searchProduct = response.data.searchProduct;
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally{
        state.isLoading = false;
      }

    } else {
        state.searchProduct = [];
    }
    console.log("Searching....=>", state.searchProduct);
 })

</script>

<template>
 <main>
    <Navbar />
    <!-- Search box -->
    <div class="max-w-md mx-auto sticky top-20 z-10">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span class="sr-only">Search icon</span>
      </div>
      <RouterLink to="/search">
      <input v-model="searchText" class="block w-full h-14 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." @input="handleInputChange">
    </RouterLink>
    </div>

    <!-- Routing -->
    <RouterView :searchProduct="state.searchProduct" :isLoading="state.isLoading" />
  </main>
</template>
