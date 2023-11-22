<template>
<div @click.stop="clickCareer">career</div>
</template>

<script lang="ts">
export default {
  name: "career",
  methods: {
    clickCareer() {
      console.warn("eeee");
    }
  }
}
</script>

<style scoped>

</style>