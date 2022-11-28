<script setup></script>

<template>
  <RouterView></RouterView>
  <Navbar></Navbar>
</template>
<script setup>
import { useRoute } from "vue-router";
let route = useRoute();
</script>
<style lang="less">
</style>
