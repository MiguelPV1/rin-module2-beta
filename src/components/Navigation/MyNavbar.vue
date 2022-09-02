<template>
  <!-- <v-navigation-drawer
    expand-on-hover
    floating
    rail
    color="#228E8C"
    theme="dark"
  > -->
  <v-container
    class="navStyle"
  >
    <v-list
      bg-color="#228E8C"
      theme="dark"
    >
      <v-list-item
        title="Red Integral Notarial"
        @click="this.$router.push('/home')"
      >
        <template v-slot:prepend>
          <v-list-item-media start>
            <v-avatar color="grey">
              <span class="text-white text-h7">RIN</span>
            </v-avatar>
          </v-list-item-media>
        </template>
      </v-list-item>
    </v-list>

    <v-divider
      thickness="2"
      theme="dark"
    />

    <v-list
      v-model:opened="open"
      density="compact"
      bg-color="#228E8C"
      theme="dark"
      nav
    >
      <v-list-item
        prepend-icon="mdi-home"
        title="INICIO"
        @click="this.$router.push('/home')"
      />

      <v-list-group value="COTEJOS">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-file"
            title="COTEJOS"
          ></v-list-item>
        </template>

        <v-list-item
          v-for="([title, navigateTo], i) in cotejos"
          :key="i"
          :title="title.toUpperCase()"
          :value="title"
          @click="this.$router.push(`${navigateTo}`)"
        ></v-list-item>
      </v-list-group>

      <v-list-group value="INSTRUMENTOS">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-archive"
            title="INSTRUMENTOS"
          ></v-list-item>
        </template>

        <v-list-item
          v-for="([title, navigateTo], i) in instrumentos"
          :key="i"
          :title="title.toUpperCase()"
          :value="title"
          @click="this.$router.push(`${navigateTo}`)"
        ></v-list-item>
      </v-list-group>
      
      <v-list-item
        prepend-icon="mdi-email"
        title="BUZÓN NOTARIAL"
        @click="this.$router.push('/home')"
      />

      <v-list-item
        prepend-icon="mdi-card-bulleted"
        title="ESTADO DE CUENTA"
        @click="this.$router.push('/home')"
      />
      
      <v-list-group value="CONFIGURACIÓN">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-cog"
            title="CONFIGURACIÓN"
          ></v-list-item>
        </template>

        <v-list-item
          v-for="([title, navigateTo], i) in configuracion"
          :key="i"
          :title="title.toUpperCase()"
          :value="title"
          @click="this.$router.push(`${navigateTo}`)"
        ></v-list-item>
      </v-list-group>

    </v-list>
  </v-container>
  <!-- </v-navigation-drawer> -->
</template>

<script>
export default {
  name: 'My-Navbar',
  data: () => ({
      open: [''],
      cotejos: [
        ['Registro/Apéndice', '/home'],
        ['Índice electrónico', '/home'],
        ['Libro de Registro', '/home'],
      ],
      instrumentos: [
        ['Índice electrónico', '/home'],
        ['Busqueda', '/home'],
      ],
      configuracion: [
        ['Usuarios', '/home'],
        ['Calendario Laboral', 'calendario'],
      ],
    }),
};
</script>

<style scoped>
.navStyle{
  background-color:#228E8C;
  border-radius: 1rem;
}
</style>