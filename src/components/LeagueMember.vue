<template>
  <section class="league-container">
    <section>
      <h1 class="card__title">{{ teamName }}</h1>
      <h1 class="card__title">{{ managerName }}</h1>
    </section>
    <section class="league__number">
      <h1 class="card__valueDiff card__valueDiff--neutral">{{ formattedRank }}</h1>
    </section>
    <section class="league__number">
      <h1 class="card__valueDiff card__valueDiff--neutral">{{ formattedLastRank }}</h1>
    </section>
    <section v-if="rank - lastRank < 0" class="card__valueDiff-container league__number">
      <svg class="card__valueDiff--positive card__valueDiff__icon" fill="currentColor" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/></svg>
      <h1 class="card__valueDiff card__valueDiff--positive">{{ formattedRankDiff }}</h1>
    </section>
    <section v-else-if="rank - lastRank > 0" class="card__valueDiff-container league__number">
      <svg class="card__valueDiff--negative card__valueDiff__icon" fill="currentColor" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/></svg>
      <h1 class="card__valueDiff card__valueDiff--negative">{{ formattedRank }}</h1>
    </section>
    <section v-else class="card__valueDiff-container league__number">
      <h1 class="card__valueDiff card__valueDiff--neutral">{{ '-' }}</h1>
    </section>
    <section class="league__number">
      <h1 class="card__valueDiff card__valueDiff--neutral">{{ points }}</h1>
    </section>
    <section class="league__number">
      <h1 class="card__valueDiff card__valueDiff--neutral">{{ totalPoints }}</h1>
    </section>
  </section>
</template>

<script>
import { formatNumber } from '../helpers'

export default {
  props: {
    teamName: String,
    managerName: String,
    rank: Number,
    lastRank: Number,
    points: Number,
    totalPoints: Number
  },
    data: function() {
    return {
      formattedRank: formatNumber(this.rank),
      formattedLastRank: formatNumber(this.lastRank),
      formattedRankDiff: formatNumber((this.rank - this.lastRank) * -1)
    }
  }
}
</script>
