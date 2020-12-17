<template>
  <section className="card-container main__card">
    <h1 className="card__title">{{ title }}</h1>
    <h1 className="card__value">{{ formattedValue }}</h1>
    <section v-if="valueDiff > 0" className="card__valueDiff-container">
      <svg class="card__valueDiff--positive card__valueDiff__icon" fill="currentColor" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/></svg>
      <h1 className="card__valueDiff card__valueDiff--positive">{{ formattedValueDiff }}</h1>
    </section>
    <section v-else-if="valueDiff < 0" className="card__valueDiff-container">
      <svg class="card__valueDiff--negative card__valueDiff__icon" fill="currentColor" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>
      <h1 className="card__valueDiff card__valueDiff--negative">{{ formattedValueDiff }}</h1>
    </section>
    <section v-else className="card__valueDiff-container">
      <svg class="card__valueDiff--neutral card__valueDiff__icon" fill="currentColor" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>
      <h1 className="card__valueDiff card__valueDiff--neutral">-</h1>
    </section>
  </section>
</template>

<script>
import { formatNumber } from '../helpers'

export default {
  name: 'Card',
  props: {
    title: String,
    value: Number,
    valueDiff: Number
  },
  data: function() {
    return {
      formattedValue: formatNumber(this.value),
      formattedValueDiff: formatNumber(this.valueDiff > 0 ? this.valueDiff : this.valueDiff * -1),
    }
  }
}
</script>
