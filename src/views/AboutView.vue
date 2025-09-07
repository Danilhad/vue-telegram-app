<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
      <h1 class="text-2xl font-bold text-center mb-6">About</h1>
      <p class="text-gray-600 mb-4">This is a Vue.js application integrated with Telegram Web App.</p>
      <router-link to="/" class="text-blue-500 hover:text-blue-700">← Back to Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>