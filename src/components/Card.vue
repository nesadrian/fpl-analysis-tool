<template>
  <section className="card-container">
    <h1 className="card__title">{{ title }}</h1>
    <h1 className="card__value">{{ value }}</h1>
    <section v-if="valueDiff > 0" className="card__valueDiff-container">
      <svg class="card__valueDiff--positive card__valueDiff__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
      <h1 className="card__valueDiff card__valueDiff--positive">{{ valueDiff }}</h1>
    </section>
    <section v-else-if="valueDiff < 0" className="card__valueDiff-container">
      <svg class="card__valueDiff--negative card__valueDiff__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      <h1 className="card__valueDiff card__valueDiff--negative">{{ valueDiff * -1 }}</h1>
    </section>
    <section v-else className="card__valueDiff-container">
      <svg class="card__valueDiff--neutral card__valueDiff__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>
      <h1 className="card__valueDiff card__valueDiff--neutral">{{ valueDiff }}</h1>
    </section>
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
