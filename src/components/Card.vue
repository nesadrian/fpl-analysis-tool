<template>
  <section className="card-container">
    <h1 className="card__title">{{ title }}</h1>
    <h1 className="card__value">{{ value }}</h1>
    <h1 className="card__valueDiff">{{ valueDiff }}</h1>
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
