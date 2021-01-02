<template>
  <main class="main-container main-container--login">
    <form class="login__form" @submit="handleSubmit">
      <input class="login__form__text" v-model="inputText" type="text" placeholder="Type manager id..."/>
      <button class="login__form__button" type="submit">Login</button>
    </form>
  </main>
</template>

<script>
import { isValidManagerId } from '../helpers'

export default {
  data() {
    return {
      inputText: ''
    }
  },
  methods: {
    handleSubmit(e) {
      isValidManagerId(this.inputText)
      e.preventDefault()
    }
  }
}
</script>
