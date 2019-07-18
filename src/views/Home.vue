<template>
  <div class="home">
    <SearchBar />
    <UserList />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import SearchBar from '@/components/SearchBar'
import UserList from '@/components/UserList'

export default {
  name: 'Home',
  components: {
    SearchBar,
    UserList
  },

  methods: {
    ...mapActions([
      'fetchUsers'
    ])
  },

  created () {
    try {
      this.fetchUsers()
    } catch (e) {
      alert(e)
    }
  }
}
</script>
