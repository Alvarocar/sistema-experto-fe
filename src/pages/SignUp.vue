<template>
  <main-layout>
    <main class="content">
      <form @submit.prevent="onSubmit">
        <fieldset>
          <legend>Registro</legend>
          <label for="name">
            Nombre
            <input v-model="user.name" type="text" id="name" required/>
          </label>
          <label for="email">
            Correo
            <input type="email" id="email" v-model="user.email" required/>
          </label>
          <label for="pass">
            Contrase&ntilde;a
            <input type="password" id="pass" v-model="user.password" required/>
          </label>
        </fieldset>
        <section class="form-buttons">
            <router-link class="submit btn-redirect" :to="{name: 'LogIn'}"><span>Log-In</span></router-link>
            <button class="submit"><span>Registarse</span></button>
        </section>
      </form>
    </main>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/MainLayout";
import { mapActions } from "vuex";

export default {
  name: "SignUp",
  data() {
      return {
          user: {
              name: '',
              email: '',
              password: '',
          }
      }
  },
  methods: {
      ...mapActions({
          send: 'signUp'
      }),
      onSubmit() {
          console.log(this.send)
          this.send(this.user)
      }
  },
  components: {
    MainLayout,
  },
};
</script>

<style scoped>

form {
  background-color: var(--color-secundary);
  border-radius: 20px;
  padding: 1rem;
}

fieldset {
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  border: none;
}

fieldset > legend {
  font-weight: 800;
  margin-bottom: 1rem;
}

fieldset label {
  font-weight: 700;
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
}

fieldset label > input {
  font-size: 1em;
  padding: 4px 10px;
  border: none;
  border-radius: 20px;
}

fieldset label > input:focus {
  outline: solid 1px #42A5F5;
}

.submit {
  font-size: 1em;
  font-weight: 700;
  width: 10rem;
  margin-top: 1.5rem;
  border: none;
  border-radius: 20px;
  background: #303F9F;
  color: #EEEEEE;
  padding: 5px;
  transition: 1s ease-in-out all;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem auto 0;
}

.submit:hover {
  opacity: .9;
  
}

.submit::before {
  content: "";
  position: absolute;
  height: 2px;
  width: 0px;
  border: 0;
  border-radius: 50%;
  transition: .5s ease-in-out all;
  z-index: 1;
}

.submit > span {
  z-index: 2;
}

.submit:hover::before {
  background: #5C6BC0;
  width: 200%;
  height: 500%;
}

.btn-redirect {
    background: #FFB74D;
    text-decoration: none;
    color: #1A237E;
}

.btn-redirect:hover::before {
    background: #FF9800;
}

.form-buttons {
    display: flex;
    justify-content: center;
    gap: 2rem;
}
</style>