<script setup>
import LogoIcon from "./icons/LogoIcon.vue";
</script>

<template>
  <header class="header">
    <div class="headerContent">
      <RouterLink to="/">
        <LogoIcon />
      </RouterLink>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  position: absolute !important;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 162px;
  background-color: rgb(89, 100, 224);
  background-image: url("@/assets/desktop/bg-pattern-header.svg");
  border-bottom-left-radius: 100px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;

  @media (max-width: 950px) {
    background-image: url("@/assets/tablet/bg-pattern-header.svg");
  }
  @media (max-width: 767px) {
    background-image: url("@/assets/mobile/bg-pattern-header.svg");
    border-bottom-left-radius: 0px;
    height: 136px;
  }

  .headerContent {
    max-width: 1100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0px 39px;

    @media (max-width: 767px) {
      padding: 0 24px;
    }
  }
}
</style>