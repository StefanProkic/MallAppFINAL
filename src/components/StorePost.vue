<template>
  <div class="storePost">
    <h3>Trending</h3>
    <div class="storePost__wrapper">
      <div class="storePost__box">
        <h4>clothing</h4>
        <h2>Nike</h2>
        <div class="storePost__image">
          <img src="../assets/images/nike.webp" alt="" />
        </div>
      </div>
      <div class="storePost__box">
        <h4>clothing</h4>
        <h2>Nike</h2>
        <div class="storePost__image">
          <img src="../assets/images/nike.webp" alt="" />
        </div>
      </div>
      <div class="storePost__box">
        <h4>clothing</h4>
        <h2>Nike</h2>
        <div class="storePost__image">
          <img src="../assets/images/nike.webp" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.storePost {
  display: inline-block;
  padding-top: 40px;
  padding-bottom: 40px;
  height: 100%;
  width: 100%;

  &__wrapper {
    display: flex;
    /* grid-template-columns: repeat(3, 320px);
    grid-template-rows: 367px; */
    gap: 90px;
    padding-top: 40px;
  }
  &__box {
    width: 320px;
    height: 367px;
    background: $purpleGradient;
    border-radius: 4px;
    padding: 20px;
  }
  &__box h4,
  h2 {
    margin-bottom: 12px;
  }
  &__image {
    overflow: hidden;
    /* display: flex;
    justify-content: center; */
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
  .storePost {
    margin-top: 10%;
    margin-bottom: 10%;
    padding: 0 2%;

    &__wrapper {
      /* grid-template-rows: repeat(3, 367px);
      grid-template-columns: 320px; */
      /* justify-content: center; */
      flex-direction: column;
      align-items: center;
      gap: 32px;
    }
  }
}
</style>
