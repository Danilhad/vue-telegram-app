<template>
  <div id="app" class="min-h-screen bg-gray-100">
    <AppNavbar />
    <main class="container mx-auto px-4 py-6">
      <router-view />
    </main>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { initTelegramWebApp } from './utils/telegram'
import AppNavbar from './components/AppNavbar.vue'

export default {
  name: 'App',
  components: {
    AppNavbar
  },
  setup() {
    onMounted(() => {
      initTelegramWebApp()
    })
  }
}
</script>