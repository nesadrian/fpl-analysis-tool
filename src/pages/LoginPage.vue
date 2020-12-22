<template>
  <main class="main-container main-container--login">
    <form @submit="handleSubmit">
      <input v-model="inputText" type="text" placeholder="Type manager id..."/>
      <button type="submit">Login</button>
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
