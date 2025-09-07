<template>
  <div v-if="isTelegram" class="fixed top-4 right-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
    Telegram Web App
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useTelegram } from '@/utils/telegram'

export default {
  name: 'TelegramWebApp',
  setup() {
    const isTelegram = ref(false)
    const telegram = useTelegram()

    onMounted(() => {
      isTelegram.value = !!telegram
    })

    return {
      isTelegram
    }
  }
}
</script>