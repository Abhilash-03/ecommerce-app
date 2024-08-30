<script setup>
import ProductCard from '@/components/ProductCard.vue';
import axios from 'axios';
import { onMounted, reactive } from 'vue';

const state = reactive({
  productlists: [],
  isLoading: true
})

onMounted(async() => {
  try {
    const response = await axios.get('http://localhost:3000/api/v1/clothes/product');
    state.productlists = response.data.products;
    console.log(state.productlists);
  } catch (error) {
    console.error('Error fetching product list', error);
  } finally{
    state.isLoading = false;
  }
})

console.log(state.productlists);
</script>

<template>
  <main class="container px-10 py-4 flex flex-wrap justify-center lg:justify-around items-center gap-5">
    <ProductCard v-for="items in state.productlists" :key="items._id" :items="items" />
  </main>
</template>
