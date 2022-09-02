<template>
  <v-app
    :style="{
      background: '#00356D',
    }"
  >
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data: () => ({
    openNavbar: false,
  }),
  methods: {
    navbar(value){
      this.openNavbar = value
    },
  },
}
</script>

<style scoped>
</style>