<template>
  <section class="main__title-container">
    <h1 className="main__title__text">{{ text }}</h1>
  </section>
</template>

<script>
export default {
  name: 'title',
  props: {
    text: String
  }
}
</script>
