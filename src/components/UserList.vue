<template lang="html">
  <ul class="user-list">
    <li v-for="user in users"
      v-bind:key="user.login.uuid"
      class="user-list__item"
    >
      <UserListItem v-bind:uuid="user.login.uuid"
        v-bind:thumbnail="user.picture.thumbnail"
        v-bind:birthDate="getBirthDate(user)"
        v-bind:fullName="getFullName(user)"
      />
    </li>
  </ul>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { getFullName, getBirthDate } from '@/etc/user'

import UserListItem from '@/components/UserListItem'

export default {
  name: 'UserList',
  components: {
    UserListItem
  },
  computed: {
    ...mapState([
      'filteredUsers'
    ]),
    ...mapGetters({
      users: 'USERS_SORTED'
    })
  },
  methods: {
    getFullName: (user) => getFullName(user),
    getBirthDate: (user) => getBirthDate(user)
  }
}
</script>

<style lang="css">
.user-list {
  list-style: none;
  padding-left: 0;
}
.user-list__item {
  margin: 5px 0;
}
</style>
