<template>
  <v-card>
    <v-toolbar
      color="white"
      theme="dark"
      class="v-toolbar-flex-none my-2 mx-6"
    >
      <div class="text-h5 font-weight-bold">
        {{ title }}
      </div>
      <v-spacer />
      <v-btn
        icon
        rounded="lg"
        color="error"
        size="small"
        variant="flat"
        @click="closeDialog()"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>

    <v-divider />

    <v-card-text>
      <v-container>
        <v-row>
          <v-col
            align="center"
            justify="center"
          >
            <v-calendar
              :columns="layout.columns"
              :is-expanded="layout.isExpanded"
              :attributes="attributes"
              @dayclick="onDayClick"
              theme
            />
            <!-- <p>{{ days }}</p> -->
          </v-col>
        </v-row>
        <v-row>
          <v-col
            align="center"
            justify="center"
            style="max-width: 600px"
          >
            <v-chip
              v-for="day in days"
              :key="day.id"
              color="red"
              text-color="white"
              closable
              close-icon="mdi-delete"
              @click:close="() => onDayClick(day)"
              :model-value="true"
            >
              {{ day.id }}
            </v-chip>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="red"
        text
        @click="closeDialog()"
      >
        Cancelar
      </v-btn>
      <v-btn
        color="#228E8C"
        text
        @click="() => {
          this.$emit(emitName, days.map(day => day.id))
          closeDialog()
        }"
      >
        Guardar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
// @ is an alias to /src

export default {
  props: {
    title: String,
    myDates: Array,
    emitName: String,
  },
  components: {
  },
  name:"Edit-Calendar",
  data () {
    return {
      days: this.myDates.map(day => ({ id: day, date: new Date(day).toISOString() }))
    }
  },
  computed: {
    dates() {
      return this.days.map(day => day.date);
    },
    attributes() {
      return [
        ...this.dates.map(date => ({
          highlight: 'red',
          dates: date,
        })),
        // {
        //   highlight: true,
        //   dates: {
        //     start: new Date(2022, 0, 1),  // Jan 1st, 2018
        //     end: new Date(2023, 0, 1),    // Jan 1st, 2019
        //     weekdays: [1, 7],              // ...on Sundays and Saturdays
        //   },
        // }
      ];
    },
    layout() {
      return this.$screens(
        {
          // Default layout for mobile
          default: {
            columns: 1,
          },
          // Override for medium screens
          md: {
            columns: 2,
          },
        },
      );
    },
  },
  methods: {
    onDayClick(day) {
      const idx = this.days.findIndex(d => d.id === day.id);
      if (idx >= 0) {
        this.days.splice(idx, 1);
      } else {
        this.days.push({
          id: day.id,
          date: day.date,
        });
      }
    },
    closeDialog() {
      this.$emit('closeDialog', false)
    },
  },
};
</script>

<style scoped>
.v-toolbar-flex-none {
  flex: none!important;
}
</style>