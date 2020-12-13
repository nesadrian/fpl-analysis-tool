<template>
  <section className="league-container">
    <h1 className="card__title">{{ name }}</h1>
    <h1>{{ rank }}</h1>
    <h1>{{ rank - lastRank }}</h1>
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
