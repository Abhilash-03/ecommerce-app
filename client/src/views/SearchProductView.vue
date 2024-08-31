<script setup>
import ProductCard from '@/components/ProductCard.vue';
import Skeleton from '@/components/Skeleton.vue';

const props = defineProps({
  searchProduct: Object,
  isLoading: Boolean

})

</script>

<template>
   <div v-if="searchProduct.length > 0" class="flex items-center justify-around gap-5">
     <ProductCard  v-for="items in searchProduct" :key="items._id" :items="items" />
   </div>
   <h1 v-else-if="!isLoading" class="text-gray-300 font-bold text-3xl text-center mt-4">Product Not Found</h1>
   <h1 v-else  class="text-gray-300 font-bold text-3xl text-center mt-4">Search Product</h1>
</template>