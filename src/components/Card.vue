<template>
  <section className="card-container">
    <h1>{{ title }}</h1>
    <h1>{{ value }}</h1>
    <h1>{{ valueDiff }}</h1>
  </section>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: String,
    value: Number,
    valueDiff: Number
  }
}
</script>
