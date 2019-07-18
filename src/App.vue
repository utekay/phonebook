<template>
  <div id="app">
    <TheSpinner v-if="isLoading" />
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TheSpinner from '@/components/TheSpinner'

export default {
  name: 'App',
  components: {
    TheSpinner
  },
  computed: {
    ...mapState([
      'isLoading'
    ])
  }
}
</script>

<style>
#app {
  width: 720px;
  margin: 60px auto;
  padding: 0 15px;
}
</style>
