<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
      <h1 class="text-2xl font-bold text-center mb-6">
        Vue Telegram App
      </h1>
      
      <div v-if="userInfo" class="mb-6">
        <h2 class="text-lg font-semibold mb-3">User Info</h2>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p><span class="font-medium">ID:</span> {{ userInfo.id }}</p>
          <p><span class="font-medium">Name:</span> {{ userInfo.firstName }} {{ userInfo.lastName }}</p>
          <p><span class="font-medium">Username:</span> {{ userInfo.username }}</p>
          <p><span class="font-medium">Language:</span> {{ userInfo.languageCode }}</p>
        </div>
      </div>
      
      <div class="space-y-3">
        <button 
          @click="showAlert" 
          class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition"
        >
          Show Alert
        </button>
        
        <button 
          @click="showConfirm" 
          class="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition"
        >
          Show Confirm
        </button>
        
        <button 
          @click="toggleMainButton" 
          class="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg transition"
        >
          {{ mainButtonVisible ? 'Hide' : 'Show' }} Main Button
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTelegram, formatUserInfo } from '@/utils/telegram'

export default {
  name: 'HomeView',
  setup() {
    const telegram = useTelegram()
    const userInfo = ref(null)
    const mainButtonVisible = ref(false)

    onMounted(() => {
      if (telegram) {
        // Получаем информацию о пользователе
        userInfo.value = formatUserInfo(telegram.initDataUnsafe.user)
        
        // Настраиваем кнопку "Назад"
        telegram.backButton.show()
        telegram.backButton.onClick(() => {
          console.log('Back button clicked')
        })
      }
    })

    onUnmounted(() => {
      if (telegram) {
        telegram.backButton.hide()
        telegram.mainButton.hide()
      }
    })

    const showAlert = () => {
      if (telegram) {
        telegram.showAlert('Это тестовое сообщение!')
      }
    }

    const showConfirm = () => {
      if (telegram) {
        telegram.showConfirm('Вы уверены?', (confirmed) => {
          console.log('User confirmed:', confirmed)
        })
      }
    }

    const toggleMainButton = () => {
      if (telegram) {
        if (mainButtonVisible.value) {
          telegram.mainButton.hide()
        } else {
          telegram.mainButton.setText('Действие')
          telegram.mainButton.show()
          telegram.mainButton.onClick(() => {
            console.log('Main button clicked')
          })
        }
        mainButtonVisible.value = !mainButtonVisible.value
      }
    }

    return {
      userInfo,
      mainButtonVisible,
      showAlert,
      showConfirm,
      toggleMainButton
    }
  }
}
</script>