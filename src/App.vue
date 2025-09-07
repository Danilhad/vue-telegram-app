<template>
  <div id="app" class="min-h-screen bg-gray-100">
    <TelegramWebApp />
    <router-view />
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { initTelegramWebApp } from './utils/telegram'
import TelegramWebApp from './components/TelegramWebApp.vue'

export default {
  name: 'App',
  components: {
    TelegramWebApp
  },
  setup() {
    onMounted(() => {
      initTelegramWebApp()
    })
  }
}
</script>