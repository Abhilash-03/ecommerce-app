<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    items: Object
})
</script>
<template>
<div class="w-full max-w-md bg-gray-800 hover:bg-gray-700 shadow-inner text-gray-300  overflow-hidden">
    <a href="#">
        <img class="p-8 hover:scale-110 transition-all duration-300 h-[400px] rounded-xl w-full" :src="items.image" :alt="items.productName" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-white">{{ items.productName }}</h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
            <div class="flex items-center space-x-1 rtl:space-x-reverse">
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{{ items.rating }}</span>
        </div>
        <div class="border-y-2 my-3 p-2">
            <h4 class="text-white font-semibold">Product Details:</h4>
            <span>{{ items.productDescription }}</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-2xl font-bold text-white">₹{{ items.price }}</span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
    </div>
</div>

</template>