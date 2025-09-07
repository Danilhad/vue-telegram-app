import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    telegramData: null
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setTelegramData(state, data) {
      state.telegramData = data
    }
  },
  actions: {
    initializeTelegram({ commit }) {
      if (window.Telegram?.WebApp) {
        const user = window.Telegram.WebApp.initDataUnsafe?.user
        if (user) {
          commit('setUser', user)
          commit('setTelegramData', window.Telegram.WebApp.initData)
        }
      }
    }
  },
  getters: {
    getUser: state => state.user,
    getTelegramData: state => state.telegramData
  }
})