<template>
  <section className="chips-container main__card">
    {{ chips }}
  </section>
</template>

<script>
export default {
  props: {
    chips: Array,
    freeTransfers: Number
  }
}
</script>
