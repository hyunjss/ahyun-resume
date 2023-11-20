<template>
  <div class="navigation-bar flex justify-start items-center">
    <div v-for="(menu, idx) of menus" :key="idx"
         :class="`inline-block menu pl-2 pr-2 flex items-center ${active === menu.to ? 'active' : '' }`">
      <a :href="menu.to" class="items-center">
        {{menu.name}}
      </a>
    </div>
  </div>

</template>

<script lang="ts">
export default {
  name: "navigationBar",
  data() {
    return {
      menus: [
        { name: 'home', to: '/home' },
        { name: 'resume', to: '/resume' },
        { name: '포트폴리오', to: '/portfolio' },
        { name: '경력기술서', to: '/career' },
        { name: 'github', to: '/home' },
      ],
      active: '/'+this.$route.name
    }
  }
}
</script>

<style scoped lang="scss">
.navigation-bar {
  background-color: black;
  height: 45px;
  .menu {
    color: #fff;
    font-size: 16px;
    height: 45px;
    border-bottom: 2px solid #000;
    &.active {
      border-bottom: 2px solid #BA55D3;
    }
    &:hover {
      border-bottom: 2px solid #BA55D3;
    }
  }
}
</style>