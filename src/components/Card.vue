<template>
  <section className="card-container">
    <h1 className="card__title">{{ title }}</h1>
    <h1 className="card__value">{{ value }}</h1>
    <h1 v-if="valueDiff > 0" className="card__valueDiff card__valueDiff--positive">{{ valueDiff }}</h1>
    <h1 v-else-if="valueDiff < 0" className="card__valueDiff card__valueDiff--negative">{{ valueDiff * -1 }}</h1>
    <h1 v-else className="card__valueDiff">{{ valueDiff }}</h1>
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
