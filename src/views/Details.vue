<template lang="html">
  <div class="user-details-wrapper">
    <div v-if="user"
      class="user-details"
    >
      <img v-bind:src="user.picture.large"
        v-bind:alt="getFullName(user)"
        class="user-details__photo"
      />
      <h3 class="user-details__full-name">
        {{ getFullNameWithTitle(user) }} <br />
        <small>{{ getBirthDate(user) }}</small>
      </h3>
      <ul>
        <li>
          <a v-bind:href="`tel:${user.cell}`"
            class="user-details__link"
          >
            {{ user.cell }}
          </a>
        </li>
        <li>
          <a v-bind:href="`mailto:${user.email}`"
            class="user-details__link"
          >
            {{ user.email }}
          </a>
        </li>
      </ul>
    </div>
    <h1 v-else>
      User not found
    </h1>
    <hr />
    <router-link :to="{ name: 'home' }">
      Go back
    </router-link>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import {
  getFullNameWithTitle,
  getBirthDate,
  getFullName
} from '@/etc/user'

export default {
  name: 'Details',
  data () {
    return {
      user: null
    }
  },

  computed: {
    ...mapState([
      'users'
    ])
  },

  methods: {
    getFullName: (user) => getFullName(user),
    getBirthDate: (user) => getBirthDate(user),
    getFullNameWithTitle: (user) => getFullNameWithTitle(user),

    getUser () {
      this.user = this.users.find((u) => {
        return u.login.uuid === this.$route.params.uuid
      })
    },

    ...mapActions([
      'fetchUsers'
    ])
  },

  watch: {
    '$route': 'getUser'
  },

  async created () {
    try {
      await this.fetchUsers()
      this.getUser()
    } catch (e) {
      alert(e.message)
    }
  }
}
</script>

<style lang="css">
.user-details__full-name {
  text-transform: uppercase;
}
</style>
