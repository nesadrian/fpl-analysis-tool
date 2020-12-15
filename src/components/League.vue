<template>
  <section className="league-container">
    <h1 className="card__title">{{ name }}</h1>
    <h1 className="card__valueDiff card__valueDiff--neutral">{{ rank }}</h1>
    <h1 className="card__valueDiff card__valueDiff--neutral">{{ lastRank }}</h1>
    <section v-if="rank - lastRank < 0" className="card__valueDiff-container">
      <svg class="card__valueDiff--positive card__valueDiff__icon" fill="currentColor" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/></svg>
      <h1 className="card__valueDiff card__valueDiff--positive">{{ (rank - lastRank) * -1 }}</h1>
    </section>
    <section v-else-if="rank - lastRank > 0" className="card__valueDiff-container">
      <svg class="card__valueDiff--negative card__valueDiff__icon" fill="currentColor" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/></svg>
      <h1 className="card__valueDiff card__valueDiff--negative">{{ rank }}</h1>
    </section>
    <section v-else className="card__valueDiff-container">
      <h1 className="card__valueDiff card__valueDiff--neutral">{{ '-' }}</h1>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    name: String,
    rank: Number,
    lastRank: Number
  }
}
</script>
