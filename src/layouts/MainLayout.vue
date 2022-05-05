<template>
  <main-header />
  <div class="content">
    <slot></slot>
  </div>
  <footer></footer>
</template>

<script>
import MainHeader from "../components/MainHeader";
export default {
  name: "MainLayout",
  components: {
    MainHeader,
  },
};
</script>

<style scoped>
.content {
  min-height: 100vh;
  background: var(--color-white-300);
  justify-content: center;
  align-items: center;
  display: flex;
}
</style>

<style>
body {
  --color-principal: #000957;
  --color-secundary: #FFCC80;
  --color-white-300: #F7F7F7;
}
</style>