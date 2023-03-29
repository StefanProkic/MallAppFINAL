<template>
  <main>
    <SingleStoreNordstormInfo />
    <SingleStoreNordstormProducts />
  </main>
</template>

<script setup>
import SingleStoreNordstormInfo from "@/components/SingleStoreInfoNordstorm.vue";
import SingleStoreNordstormProducts from "@/components/SingleStoreProductsNordstorm.vue";
/* 
import { ref } from "vue";
let data = ref([
  {
    id: 0,
    title: "shirt",
    price: "$60.00",
  },
  {
    id: 1,
    title: "shirt2",
    price: "$60.00",
    src: "@/assets/images/sweater_zara.webp",
  },
  {
    id: 2,
    title: "shirt3",
    price: "$60.00",
  },
]); */
</script>
