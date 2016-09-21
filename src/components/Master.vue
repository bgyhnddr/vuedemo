<template>
  <main-header></main-header>
  <router-view></router-view>
</template>

<script>
import MainHeader from './MainHeader'
export default {
  components:{MainHeader}
}
</script>