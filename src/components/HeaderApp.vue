<template>
  <header>
    <div class="header__wrapper">
      <a href="/" title="Home Page">
        <img src="../assets/images/logo_mall_app.png" alt="logo of mall app" />
      </a>
      <h1 class="shine">Welcome</h1>
    </div>
  </header>
  <!-- <Map /> -->
  <RouterView />
  <!-- <PostAreaApp /> -->
</template>
<style lang="scss">
header {
  max-width: 1140px;
  margin: 0 auto;
  position: relative;
  margin-bottom: 100px;

  .header__wrapper {
    padding-top: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    img {
      width: 176px;
      height: 109px;
    }
  }
  .shine {
    background: #222 -webkit-gradient(
        linear,
        left top,
        right top,
        from(#222),
        to(#222),
        color-stop(0.1, #fff)
      ) 0 0 no-repeat;
    -webkit-background-size: 37px;
    color: $text-color;
    -webkit-background-clip: text;
    -webkit-animation-name: shine;
    -webkit-animation-duration: $duration;
    -webkit-animation-iteration-count: infinite;
    text-shadow: 0 0px 0px rgba(255, 255, 255, 0.5);
  }
  @-webkit-keyframes shine {
    0%,
    10% {
      background-position: -1000px;
    }
    20% {
      background-position: top left;
    }
    90% {
      background-position: top right;
    }
    100% {
      background-position: 1000px;
    }
  }
}
</style>
