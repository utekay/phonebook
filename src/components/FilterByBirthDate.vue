<template lang="html">
  <div class="birth-date-filter">
    <button v-on:click="showFilter = !showFilter"
      class="birth-date-filter__toggler button button_primary"
      type="button"
    >
      Date filter
    </button>
    <div v-if="showFilter"
      class="birth-date-filter__dropdown"
    >
      <ul class="birth-date-filter-choices">
        <li v-for="date in birthDates"
          class="birth-date-filter-choices__item"
          v-bind:key="date"
        >
          <input v-bind:id="getId(date)"
            v-bind:value="date"
            v-bind:checked="~birthDateFilter.indexOf(date)"
            v-on:change="onChange"
            type="checkbox"
          />
          <label v-bind:for="getId(date)">
            {{ date }}
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'FilterByBirthDate',
  data () {
    return {
      showFilter: false
    }
  },
  computed: {
    ...mapState([
      'birthDateFilter'
    ]),
    ...mapGetters({
      birthDates: 'BIRTH_DATES'
    })
  },
  methods: {
    ...mapActions([
      'setBirthDateFilter'
    ]),

    getId (date) {
      return `id_date_${date.replace('.', '_')}`
    },

    onChange (ev) {
      const { checked, value } = ev.target
      const dates = [...this.birthDateFilter]

      if (checked) {
        dates.push(value)
      } else {
        dates.splice(dates.indexOf(value), 1)
      }

      this.setBirthDateFilter({ dates })
    }
  }
}
</script>

<style lang="css">
.birth-date-filter__dropdown {
  margin: 10px 0;
  padding: 5px 15px;
  border: 1px solid var(--color-primary)
}
.birth-date-filter-choices {
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.birth-date-filter-choices__item {
  padding: 5px;
}
.birth-date-filter-choices__item:last-of-type {
  align-self: flex-start;
}
</style>
