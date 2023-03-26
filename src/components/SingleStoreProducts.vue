<template>
  <div class="singleStore">
    <h2>Special offer</h2>
    <div class="singleStore__productsWrapper">
      <div class="singleStore__productsBox">
        <h3>sweater - nike</h3>
        <h4>$ 69.99</h4>
        <img src="@/assets/images/sweater_zara.webp" alt="sweater" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
          corrupti mollitia iusto dignissimos quod obcaecati.
        </p>
      </div>
      <div class="singleStore__productsBox">
        <h3>sweater - nike</h3>
        <h4>$ 69.99</h4>
        <img src="@/assets/images/sweater_zara.webp" alt="sweater" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
          corrupti mollitia iusto dignissimos quod obcaecati.
        </p>
      </div>
      <div class="singleStore__productsBox">
        <h3>sweater - nike</h3>
        <h4>$ 69.99</h4>
        <img src="@/assets/images/sweater_zara.webp" alt="sweater" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
          corrupti mollitia iusto dignissimos quod obcaecati.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  padding-bottom: 40px;
  font-size: 48px;
}
h3 {
  background-color: $purple;
  padding: 32px 16px;
  font-weight: 200;
  font-size: 35px;
  border-radius: 4px 4px 0 0;
}
h4 {
  color: $black;
  margin-top: 15px;
  font-size: 56px;
  font-weight: 100;
  margin-bottom: 10px;
}

.singleStore {
  padding-top: 40px;
  padding-bottom: 40px;

  &__productsWrapper {
    display: flex;
    /* grid-template-columns: repeat(3, 363px);
    grid-template-rows: 635px; */
    gap: 25.2px;
  }
  &__productsBox {
    width: 363px;
    height: 635px;
    background: $white;
    text-align: center;
    border-radius: 4px;

    img {
      width: 296px;
      -webkit-mask-image: linear-gradient(
        45deg,
        #000 25%,
        rgba(0, 0, 0, 0.2) 50%,
        #000 75%
      );
      mask-image: linear-gradient(
        45deg,
        #000 25%,
        rgba(0, 0, 0, 0.2) 50%,
        #000 75%
      );
      -webkit-mask-size: 800%;
      mask-size: 800%;
      -webkit-mask-position: 0;
      mask-position: 0;
    }
    img:hover {
      transition: mask-position 2s ease, -webkit-mask-position 2s ease;
      -webkit-mask-position: 120%;
      mask-position: 120%;
      opacity: 1;
    }
    p {
      margin-left: 10px;
      margin-right: 10px;
      margin-top: 15px;
    }
  }
}
/* mobile responsive */
@media (max-width: $mobile) {
  h2 {
    font-size: 23px;
  }
  h3 {
    font-size: 20px;
  }
  h4 {
    font-size: 16px;
  }
  .singleStore {
    padding-top: 10%;
    padding-bottom: 10%;

    &__productsWrapper {
      flex-direction: column;
      align-items: center;
    }
    &__productsBox {
      width: 74%;
      height: auto;
      padding-bottom: 32px;
    }
    img {
      width: 74%;
    }
  }
}
</style>
