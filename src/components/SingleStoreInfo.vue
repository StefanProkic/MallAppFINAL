<template>
  <div class="singleStore">
    <div class="singleStore__txt">
      <h1 v-for="title in store" :key="title.id">{{ title.title }}</h1>
      <p v-for="txt in store" :key="txt.id">{{ txt.info }}</p>
      <div class="singleStore__legend">
        <img src="@/assets/images/building.webp" alt="building" />
        <h2>first floor</h2>
      </div>
    </div>
    <div class="singleStore__info">
      <div class="singleStore__infoBox">
        <img src="../assets/images/time.webp" alt="clock" />
        <h3>working hours</h3>
        <span
          >Mon – Fri 10.00 – 22.00<br />
          Sat – Sun 10.00 – 22.00</span
        >
      </div>
      <div class="singleStore__infoBox">
        <img src="../assets/images/email.webp" alt="clock" />
        <h3>email</h3>
        <a href="mailto:nike@gmail.com"><span>nike@gmail.com</span></a>
      </div>
      <div class="singleStore__infoBox">
        <img src="../assets/images/web.webp" alt="clock" />
        <h3>web</h3>
        <a href="https://www.nike.com/" target="_blank"
          ><span>https://nike.com</span></a
        >
      </div>
    </div>
  </div>
</template>

<script>
import storesData from "../stores.json";

export default {
  data() {
    return { store: storesData };
  },
};
</script>

<style lang="scss" scoped>
.singleStore {
  display: flex;
  &__txt {
    width: 792px;
    border-left: 1px solid $white;
    padding: 20px;
  }
  h1 {
    font-size: 48px;
    margin-bottom: 20px;
  }
  p {
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 80px;
    /* font-size: 16px; */
    color: $white;
    line-height: 1.7em;
  }
  &__legend {
    text-align: center;
  }
  &__info {
    width: 348px;
    display: flex;
    flex-direction: column;

    /* grid-template-rows: repeat(3, 149px);
    grid-template-columns: 308px; */
    gap: 15px;
    padding-left: 40px;
  }
  &__infoBox {
    height: 149px;
    width: 308px;
    background-color: $white;
    padding: 16px;
    border-radius: 4px;

    img {
      width: 40px;
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

    h3 {
      color: $black;
    }
    span {
      color: $black;
      margin-top: 5px;
    }
    a {
      text-decoration: none;
      color: $black;
    }
  }
}
/* mobile responsive */
@media (max-width: $mobile) {
  .singleStore {
    display: inherit;

    h1 {
      font-size: 28px;
    }

    &__txt {
      width: auto;
      margin-bottom: 10%;
    }
    &__info {
      width: 100%;
      align-items: center;
      padding-left: 0;
    }
    p {
      margin-bottom: 10%;
    }
  }
}
</style>
