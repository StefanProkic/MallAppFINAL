<template>
  <div class="productsPost">
    <h3>Best offers</h3>
    <div class="productsPost__wrapper">
      <div class="productsPost__box">
        <RouterLink to="/single-store">
          <h4>special offer</h4>
          <h2>sweater - Nike</h2>
          <div class="productsPost__image">
            <img src="../assets/images/sweater_zara.webp" alt="" />
          </div>
        </RouterLink>
      </div>
      <div class="productsPost__box">
        <h4>special offer</h4>
        <h2>sweater - nike</h2>
        <div class="productsPost__image">
          <img src="../assets/images/sweater_zara.webp" alt="" />
        </div>
      </div>
      <div class="productsPost__box">
        <h4>special offer</h4>
        <h2>sweater - nike</h2>
        <div class="productsPost__image">
          <img src="../assets/images/sweater_zara.webp" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.productsPost {
  display: inline-block;
  padding-top: 40px;
  padding-bottom: 40px;
  height: 100%;
  width: 100%;

  &__wrapper {
    display: flex;
    gap: 90px;
    padding-top: 40px;
  }
  &__box {
    width: 320px;
    height: 367px;
    background: $purpleGradient;
    border-radius: 4px;
    padding: 20px;

    a {
      text-decoration: none;
    }
  }

  &__box h4,
  h2 {
    margin-bottom: 12px;
  }
  &__image {
    overflow: hidden;
    display: inline-block;
    border-radius: 4px;
    height: 242px;

    img {
      width: 100%;
      transition: transform 0.5s;
    }
    img:hover {
      transform: scale(1.1);
    }
  }
}

/* mobile responsive */
@media (max-width: $mobile) {
  .productsPost {
    margin-bottom: 10%;
    padding: 0 2%;

    &__wrapper {
      flex-direction: column;
      align-items: center;
      gap: 32px;
    }
  }
}
</style>
