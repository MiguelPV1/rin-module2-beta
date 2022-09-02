<template>
  <v-container class="fill-height">
    <v-row>
      <v-col
        align="center"
        justify="center"
      >
        <div class="text-h4 font-weight-bold text-white">
          CALENDARIO LABORAL
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        align="center"
        justify="center"
      >
        <v-card>
          <div class="pb-1 text-center bg-white rounded-lg">
            <v-tabs
              background-color="white"
              v-model="currentTab"
              theme="dark"
              centered
            >
              <v-tab
                :value="'tab-Calendario-AGN'"
              >
                Calendario AGN
              </v-tab>
              <v-tab
                :value="'tab-Calendario-RIN'"
              >
                Calendario RIN
              </v-tab>
            </v-tabs>

            <v-divider class=""/>

            <v-window v-model="currentTab">
              <v-window-item :value="'tab-Calendario-AGN'">
                <v-container>
                  <v-row>
                    <v-col
                      align="end"
                      justify="center"
                    >
                      <v-dialog
                        v-model="dialogAGN"
                        persistent
                        :fullscreen="this.$vuetify.display.xs"
                      >
                        <template v-slot:activator="{ props }">
                          <v-btn
                            theme="dark"
                            color="#228E8C"
                            prepend-icon="mdi-pencil"
                            v-bind="props"
                          >
                            Editar Calendario
                          </v-btn>
                        </template>
                        <edit-calendar
                          key="edit-calendar-AGN"
                          :title="'Editar calendario laboral AGN 2022'"
                          :myDates="datesAGN"
                          emitName="AGN"
                          @AGN="updateDatesAGN"
                          @closeDialog="closeDialog"
                        />
                      </v-dialog>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col
                      align="center"
                      justify="center"
                    >
                      <v-calendar
                        :columns="layout.columns"
                        :rows="layout.rows"
                        :is-expanded="layout.isExpanded"
                        :attributes="attributes(datesAGN)"
                        :fullscreen="this.$vuetify.display.xs"
                      />
                    </v-col>
                  </v-row>
                </v-container>
              </v-window-item>

              <v-window-item :value="'tab-Calendario-RIN'">
                <v-container>
                  <v-row>
                    <v-col
                      align="end"
                      justify="center"
                    >
                      <v-dialog
                        v-model="dialogRIN"
                        persistent
                      >
                        <template v-slot:activator="{ props }">
                          <v-btn
                            theme="dark"
                            color="#228E8C"
                            prepend-icon="mdi-pencil"
                            v-bind="props"
                          >
                            Editar Calendario
                          </v-btn>
                        </template>
                        <edit-calendar
                          key="modal-edit-calendar-RIN"
                          :title="'Editar calendario laboral RIN 2022'"
                          :myDates="datesRIN"
                          emitName="RIN"
                          @RIN="updateDatesRIN"
                          @closeDialog="closeDialog"
                        />
                      </v-dialog>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col
                      align="center"
                      justify="center"
                    >
                      <v-calendar
                        :columns="layout.columns"
                        :rows="layout.rows"
                        :is-expanded="layout.isExpanded"
                        :attributes="attributes(datesRIN)"
                      />
                    </v-col>
                  </v-row>
                </v-container>
              </v-window-item>
            </v-window>
          </div>
        </v-card> 
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EditCalendar from '../components/Calendar/EditCalendar.vue'

export default {
  components: {
    EditCalendar,
  },
  name:"CalendarioPage",
  data () {
      return {
        currentTab: '',
        dialogAGN: false,
        dialogRIN: false,
        datesAGN: [
          '2022-08-10',
          '2022-08-15',
          '2022-08-24',
          '2022-09-10',
          '2022-05-15',
          '2022-02-24',
          '2022-10-25',
          '2022-11-10',
          '2022-12-05',
        ],
        datesRIN: [
          '2022-07-10',
          '2022-06-15',
          '2022-05-24',
          '2022-08-10',
          '2022-11-15',
          '2022-05-24',
          '2022-08-25',
          '2022-06-10',
          '2022-11-05',
        ],
      }
    },
    computed: {
      layout() {
        return this.$screens(
          {
            // Default layout for mobile
            default: {
              columns: 1,
              rows: 1,
              isExpanded: true,
            },
            // Override for medium screens
            md: {
              columns: 2,
              rows: 2,
              isExpanded: false,
            },
          },
        );
      },
    },
    methods: {
      closeDialog(value) {
        this.dialogAGN = value
        this.dialogRIN = value
      },
      updateDatesAGN(value) {
        this.datesAGN = value
      },
      updateDatesRIN(value) {
        this.datesRIN = value
      },
      attributes(dates) {
        return [
          ...dates.map(date => ({
            highlight: 'red',
            dates: new Date(date).toISOString(),
            popover: {
              label: 'Día inhábil',
              visibility: 'hover',
              hideIndicator: true,
            },
          }))
        ];
      },
    },

};
</script>

<style scoped>
</style>