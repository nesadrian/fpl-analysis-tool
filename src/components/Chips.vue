<template>
  <section className="chips-container main__card">
    {{ chips }}
    <Chip />
  </section>
</template>

<script>
import Chip from './Chip'

export default {
  props: {
    chips: Array,
    freeTransfers: Number
  },
  components: {
    Chip
  }
}
</script>
