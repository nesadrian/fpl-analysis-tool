<template>
  <section>
    <h1 className="title__text">{{ text }}</h1>
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
