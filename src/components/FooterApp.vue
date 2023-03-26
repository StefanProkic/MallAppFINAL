<template>
  <footer>
    <RouterLink to="/"
      ><img src="../assets/images/home.png" alt="Homepage icon"
    /></RouterLink>
    <RouterLink to="/contact"
      ><img src="../assets/images/map-pin.png" alt="Map pin icon"
    /></RouterLink>
  </footer>
</template>

<style lang="scss">
footer {
  display: flex;
  gap: 50px;
  justify-content: center;
  padding: 20px 0;

  img {
    width: 50px;

    transition: all 0.3s;
  }
  img:hover {
    transform: scale(1.07);
  }
  a {
    text-align: center;
  }
}

/* mobile responsive */
@media (max-width: $mobile) {
  footer {
    gap: 4%;
    img {
      width: 72%;
    }
  }
}
</style>
<script setup>
import { RouterLink } from "vue-router";
</script>
