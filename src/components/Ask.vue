<template>
  <article>
    <h3>[pregunta] {{ user }}</h3>
    <div class="dialog"></div>
  </article>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Ask",
  computed: mapState({
    user: (state) => state.user,
  }),
};
</script>

<style scoped>
article {
  background: var(--color-secundary);
  position: relative;
  margin: 1rem 0;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
}

article > h3 {
  flex: 10;
}

.dialog {
  background: var(--color-principal);
  min-height: 100%;
  width: 20px;
  flex: auto;
  position: relative;
  border-radius: 0 10px 10px 0;
}
.dialog::before {
  content: "";
  background: var(--color-principal);
  position: absolute;
  width: 3rem;
  height: 2rem;
  top: 0;
  bottom: 0;
  margin: auto 0;
  right: -3rem;
  clip-path: polygon(0 0, 100% 100%, 0 100%);
}
</style>