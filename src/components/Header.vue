<template>
  <header>
    <h1>{{ `${firstname} ${lastname}` }}</h1>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    firstname: String,
    lastname: String
  }
}

</script>
