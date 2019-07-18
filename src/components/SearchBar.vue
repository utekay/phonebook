<template lang="html">
  <div class="search-bar">
    <div class="search-bar__item">
      <FilterByName />
    </div>
    <div class="search-bar__item">
      <FilterByBirthDate />
    </div>
    <div class="search-bar__item sort-buttons">
      <AppButton v-on:click="setSortBy({ value: 'name' })"
        v-bind:className="`${sortBy === 'name' ? 'button_primary' : ''} sort-buttons__item`"
      >
        Sort by name
      </AppButton>
      <AppButton v-on:click="setSortBy({ value: 'birthDate' })"
        v-bind:className="`${sortBy === 'birthDate' ? 'button_primary' : ''} sort-buttons__item`"
      >
        Sort by birth date
      </AppButton>
    </div>
    <div class="search-bar__item">
      <AppButton v-on:click="clearFilters">
        Reset
      </AppButton>
    </div>
  </div>
</template>

<script>
import FilterByName from '@/components/FilterByName'
import FilterByBirthDate from '@/components/FilterByBirthDate'
import AppButton from '@/components/AppButton'

import { mapState, mapActions } from 'vuex'

export default {
  name: 'SearchBar',
  components: {
    FilterByName,
    FilterByBirthDate,
    AppButton
  },
  computed: {
    ...mapState([
      'sortBy'
    ])
  },
  methods: {
    ...mapActions([
      'clearFilters',
      'setSortBy'
    ])
  }
}
</script>

<style lang="css">
.search-bar {
  margin: 35px 0;
}
.search-bar__item {
  margin: 5px 0;
}
.sort-buttons__item {
  margin-right: 5px;
}
</style>
