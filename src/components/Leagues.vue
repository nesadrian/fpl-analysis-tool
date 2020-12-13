<template>
 <League />
</template>

<script>
import League from './League'

export default {
  props: {
    leagues: Array
  },
  components: {
    League
  }
}

</script>
