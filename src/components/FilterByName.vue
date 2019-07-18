<template lang="html">
  <div class="name-filter">
    <input v-bind:value="nameFilter"
      v-on:input="onInput"
      class="name-filter__input text-input"
      placeholder="Type name here..."
      type="text"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'FilterByName',
  computed: {
    ...mapState([
      'nameFilter'
    ])
  },
  methods: {
    ...mapActions([
      'setNameFilter'
    ]),
    onInput (ev) {
      this.setNameFilter({
        value: ev.target.value
      })
    }
  }
}
</script>
