<template>
  <div
    class="full-time"
    @click="(checked = !checked), $emit('update:modelValue', checked)"
  >
    <div class="checkbox" :class="{ checked: checked }"></div>
    <p>Full Time Only</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps(["modelValue"]);

const checked = ref(props.modelValue);
</script>

<style lang="scss" scoped>
.full-time {
  max-width: 148px;
  width: 100%;
  min-width: 110px;
  height: 24px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  gap: 14px;
  margin-left: 32px;

  @media (max-width: 767px) {
    max-width: 100%;
    padding: 23px;
    margin-left: 0;
  }

  .checkbox {
    height: 24px;
    max-width: 24px;
    width: 100%;
    background-color: rgb(255, 255, 255);
    opacity: 0.1;
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: 3px;
    cursor: pointer;

    &.checked {
      background-color: var(--color-violet);
      opacity: 1;
      background-image: url("@/assets/desktop/icon-check.svg");
    }

    &:hover {
      background-color: var(--color-violet);
      opacity: 0.25;
    }
  }

  p {
    color: rgb(255, 255, 255);
    font-weight: 700;
    cursor: pointer;
    font-size: var(--font-size-body);
    line-height: var(--line-height-body);
  }
}
</style>