<template>
  <main-layout>
    <article class="container">
      <section>
        <main>
          <section>
            <ask></ask>
            <form @submit.prevent="onSubmit">
              <fieldset>
                <button class="option"><span>SI</span></button>
                <button class="option"><span>NO</span></button>
              </fieldset>
            </form>
          </section>
          <figure>
            <img src="dumbledore.jpg" />
          </figure>
        </main>
      </section>
    </article>
  </main-layout>
</template>

<script>
import Ask from "../components/Ask.vue";
import MainLayout from "../layouts/MainLayout.vue";
export default {
  name: "Home",
  methods: {
    onSubmit() {
      console.log();
    },
  },
  components: {
    Ask,
    MainLayout,
  },
};
</script>

<style scoped>
main {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

figure {
  height: 300px;
}

figure img {
  height: 100%;
}

legend {
  margin-bottom: 15px;
  position: relative;
}

legend::after {
  content: "";
  background: var(--color-principal);
  height: 2px;
  width: 100%;
  left: 0px;
  bottom: -5px;
  position: absolute;
}

form {
  background: var(--color-secundary);
  border-radius: 10px;
  padding: 10px 5px;
  width: 400px;
}

form > fieldset {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: none;
}

.option {
  display: flex;
  width: 100%;
  padding: 0.5rem 0;
  font-size: 1em;
  border: none;
  border-radius: 10px;
  position: relative;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.option::before {
  content: "";
  position: absolute;
  height: 2px;
  width: 0px;
  border: 0;
  border-radius: 50%;
  transition: 1s ease-in-out all;
  z-index: 1;
}

.option > span {
  z-index: 2;
}

.option:hover::before {
  background: #FF8A65;
  width: 200%;
  height: 500%;
}

.option:hover {
  transform: scale(1.02);
}
</style>