<template>
  <div class="contactMain">
    <h1>contact</h1>
    <div class="contactInfo">
      <div class="contactInfo__wrapper">
        <div class="contactInfo__box">
          <div class="contactInfo__image">
            <img src="../assets/images/phone.webp" alt="" />
          </div>
          <h2>Phone</h2>
          <a href="tel:+01 33 3333 3333"><p>+01 33 3333 3333</p></a>
        </div>
        <div class="contactInfo__box">
          <div class="contactInfo__image">
            <img src="../assets/images/map-contact.webp" alt="" />
          </div>
          <h2>Location</h2>
          <p>125,Central Square, New York, NY 286</p>
        </div>
        <div class="contactInfo__box">
          <div class="contactInfo__image">
            <img src="../assets/images/mail.webp" alt="" />
          </div>
          <h2>Email</h2>
          <a href="mailto:mallapp@company.com"><p>mallapp@company.com</p></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contactInfo {
  padding-top: 40px;
  padding-bottom: 40px;
  height: 100%;
  width: 100%;

  &__wrapper {
    display: flex;
    align-items: center;
    /* grid-template-columns: repeat(3, 365px);
    grid-template-rows: 261px; */
    gap: 22px;
    padding-top: 40px;
  }
  &__box {
    width: 365px;
    height: 261px;
    background: $white;
    /* width: 365px;
    height: 261px; */
    border-radius: 4px;
    padding: 40px;
  }
  &__box h2 {
    margin-bottom: 12px;
  }
  &__box p {
    font-size: 20px;
    text-align: center;
  }
  &__image {
    overflow: hidden;
    display: flex;
    justify-content: center;
    border-radius: 4px;
    height: 50px;
    margin-bottom: 15px;
  }
  img:hover {
    animation: shake 1s;
    animation-iteration-count: infinite;
  }
  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }
}
h2 {
  color: $black;
  text-align: center;
  margin-bottom: 15px;
}
a {
  text-decoration: none;
  color: $black;
}

/* mobile responsive */
@media (max-width: $mobile) {
  .contactInfo {
    padding-top: 10%;
    padding-bottom: 10%;

    p {
      font-size: 18px;
    }

    &__wrapper {
      flex-direction: column;
      padding-top: 0;
    }
    &__box {
      width: 82%;
      height: auto;
    }
  }
}
</style>
