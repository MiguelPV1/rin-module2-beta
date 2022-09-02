<template>
  <my-app-bar @navbar="navbar" />
  <v-container fluid>
    <v-row v-show="openNavbar">
      <v-col xs="12" sm="5" lg="3" xl="2">
        <my-navbar :openNavbar="openNavbar" />
      </v-col>
      <v-col xs="12" sm="7" lg="9" xl="10">
        <router-view />
      </v-col>
    </v-row>

    <v-row v-show="!openNavbar">
      <v-col col="12">
        <router-view />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MyNavbar from './Navigation/MyNavbar.vue'
import MyAppBar from './Navigation/MyAppBar.vue'

export default {
  name: 'LayoutTemplate',
  components: {
    MyNavbar,
    MyAppBar,
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