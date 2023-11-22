<template>
  <div class="default-layout">
    <navigation-bar/>
    <slot />
  </div>
</template>

<script lang="ts">
import NavigationBar from "/components/navigationBar.vue";
export default  {
  name: "defaultLayout",
  components: {NavigationBar}
}


</script>

<style scoped lang="scss">
 //$
 .default-layout {
   background-color: #000;
 }
</style>