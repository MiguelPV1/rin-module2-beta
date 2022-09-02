<template>
  <h1>Calendario para seleccionar</h1>
  <Calendar
    :attributes="attributes"
    @dayclick="onDayClick"
    :disableDates="{ weekdays: [1, 7] }"
    theme
  />
  <p>{{ days }}</p>
  <!-- <DatePicker
    :date='days'
    v-model='date'
    :disabled-dates='disableDates'
  /> -->
</template>

<script>

export default {
  name: 'Calendario-Vue',
  data() {
    return {
      days: [],
      disableDates: ['2022-08-26']
    };
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
        {
          highlight: true,
          dates: {
            start: new Date(2022, 0, 1),  // Jan 1st, 2018
            end: new Date(2023, 0, 1),    // Jan 1st, 2019
            weekdays: [1, 7],              // ...on Sundays and Saturdays
          },
        }
      ];
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
  },
};
</script>
