<template>
  <main>
    <SingleStoreInfo />
    <SingleStoreProducts />
  </main>
</template>

<script setup>
import SingleStoreInfo from "@/components/SingleStoreInfo.vue";
import SingleStoreProducts from "@/components/SingleStoreProducts.vue";
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
