import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {
  SET_USERS,
  SET_LOADING,
  SET_NAME_FILTER,
  SET_BIRTH_DATE_FILTER,
  CLEAR_FILTERS,
  SET_SORT_BY
} from './mutations'

import {
  getNameFilterRegExp,
  filterByName,
  filterByBirthDate,
  sortByName,
  getBirthDates,
  sortByBirthDate
} from '@/etc/user'

import api from '@/etc/api'

export default new Vuex.Store({
  state: {
    users: [],
    filteredUsers: [],
    isLoading: false,
    nameFilter: '',
    birthDateFilter: [],
    sortBy: 'name',
  },

  mutations: {
    [SET_USERS]: (state, { users }) => {
      state.users = users
    },
    [SET_LOADING]: (state, { value }) => {
      state.isLoading = value
    },
    [SET_NAME_FILTER]: (state, { value }) => {
      state.nameFilter = value
    },
    [SET_BIRTH_DATE_FILTER]: (state, { dates }) => {
      state.birthDateFilter = dates
    },
    [SET_SORT_BY]: (state, { value }) => {
      state.sortBy = value
    },
    [CLEAR_FILTERS]: (state) => {
      state.birthDateFilter = []
      state.nameFilter = ''
    }
  },

  getters: {
    NAME_FILTER_REGEXP: (state) => {
      return getNameFilterRegExp(state.nameFilter)
    },
    BIRTH_DATES: (state) => {
      return getBirthDates(sortByBirthDate(state.users)).filter((d, i, dates) => {
        return dates.indexOf(d) === i
      })
    },

    USERS_FILTERED_BY_NAME: (state, getters) => {
      return filterByName(state.users, getters.NAME_FILTER_REGEXP)
    },
    USERS_FILTERED: (state, getters) => {
      return (state.birthDateFilter.length === 0) ? getters.USERS_FILTERED_BY_NAME
        : filterByBirthDate(getters.USERS_FILTERED_BY_NAME, state.birthDateFilter)
    },
    USERS_SORTED: (state, getters) => {
      switch (state.sortBy) {
        case 'name':
          return sortByName(getters.USERS_FILTERED)
        case 'birthDate':
          return sortByBirthDate(getters.USERS_FILTERED)
        default:
          return getters.USERS_FILTERED
      }
    }
  },

  actions: {
    setUsers ({ commit }, { users }) {
      commit(SET_USERS, { users })
    },
    setLoading ({ commit }, { value }) {
      commit(SET_LOADING, { value })
    },
    setNameFilter ({ commit }, { value }) {
      commit(SET_NAME_FILTER, { value })
    },
    setBirthDateFilter ({ commit }, { dates }) {
      commit(SET_BIRTH_DATE_FILTER, { dates })
    },

    setSortBy ({ commit }, { value }) {
      commit(SET_SORT_BY, { value })
    },

    clearFilters ({ commit }) {
      commit(CLEAR_FILTERS)
    },

    async fetchUsers ({ dispatch }) {
      if (!api.isFetchedAtleastOnce) {
        await dispatch('setLoading', {
          value: true
        })

        try {
          const users = await api.getUsers()
          await dispatch('setUsers', { users })

        } catch (e) {
          throw e

        } finally {
          await dispatch('setLoading', {
            value: false
          })
          api.isFetchedAtleastOnce = true
        }
      }
    }
  }
})
