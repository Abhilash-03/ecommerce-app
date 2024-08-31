<script setup>
import ProductCard from '@/components/ProductCard.vue';
import Skeleton from '@/components/Skeleton.vue';
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
  } catch (error) {
    console.error('Error fetching product list', error);
  } finally{
    state.isLoading = false;
  }
})

</script>

<template>
  <main class="container px-10 py-4 flex flex-wrap justify-center lg:justify-around items-center gap-5">
    <div class="flex flex-wrap justify-around gap-5" v-if="state.isLoading">
      <Skeleton v-for="range in 6" :key="range" />
    </div>
    <ProductCard v-else v-for="items in state.productlists" :key="items._id" :items="items" />
  </main>
</template>
