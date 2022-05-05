<template>
  <header>
    <h2>Sistema Experto - Peliculas y Series</h2>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
};
</script>

<style scoped>
h2 {
  margin: 0;
  color: #EEEEEE;
}

header {
  background: var(--color-principal);
  height: 60px;
  position: relative;
  display: flex;
  justify-content: start;
  padding: 0 1rem;
  align-items: center;
}

header::after {
  content: "";
  height: 5px;
  position: absolute;
  background: var(--color-secundary);
  width: 100%;
  bottom: 0px;
  left: 0px;
}
</style>