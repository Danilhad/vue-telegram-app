<template>
  <div class="max-w-2xl mx-auto">
    <div class="bg-white rounded-xl shadow-md p-6">
      <h1 class="text-2xl font-bold text-center mb-6">
        Добро пожаловать!
      </h1>
      
      <div v-if="userInfo" class="text-center mb-6">
        <UserAvatar 
          :src="userAvatar" 
          :alt="userName"
          :size="'4rem'"
          :border="true"
          class="mx-auto mb-4"
        />
        <h2 class="text-xl font-semibold">{{ userName }}</h2>
        <p class="text-gray-600">@{{ userInfo.username }}</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded-lg">
          <h3 class="font-semibold text-blue-800">Ваш ID</h3>
          <p class="text-blue-600">{{ userInfo?.id }}</p>
        </div>
        
        <div class="bg-green-50 p-4 rounded-lg">
          <h3 class="font-semibold text-green-800">Язык</h3>
          <p class="text-green-600">{{ userInfo?.languageCode || 'Не указан' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useTelegram } from '@/utils/telegram'
import UserAvatar from '@/components/UserAvatar.vue'

export default {
  name: 'HomeView',
  components: {
    UserAvatar
  },
  setup() {
    const telegram = useTelegram()
    
    const userInfo = computed(() => {
      if (telegram?.initDataUnsafe?.user) {
        return {
          id: telegram.initDataUnsafe.user.id,
          firstName: telegram.initDataUnsafe.user.first_name,
          lastName: telegram.initDataUnsafe.user.last_name,
          username: telegram.initDataUnsafe.user.username,
          languageCode: telegram.initDataUnsafe.user.language_code,
          photoUrl: telegram.initDataUnsafe.user.photo_url
        }
      }
      return null
    })

    const userAvatar = computed(() => {
      return userInfo.value?.photoUrl || '/default-avatar.png'
    })

    const userName = computed(() => {
      if (userInfo.value) {
        return `${userInfo.value.firstName} ${userInfo.value.lastName}`
      }
      return 'Пользователь'
    })

    return {
      userInfo,
      userAvatar,
      userName
    }
  }
}
</script>