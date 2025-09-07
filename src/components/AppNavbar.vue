<template>
  <nav class="flex items-center justify-between p-4 bg-white shadow-sm border-b border-gray-200">
    <!-- Логотип -->
    <router-link to="/" aria-label="Home" class="flex items-center">
      <Logo class="w-8 h-8" />
      <span class="ml-2 text-lg font-semibold text-gray-800">Telegram App</span>
    </router-link>

    <!-- Аватарка пользователя -->
    <div class="flex items-center">
      <div v-if="userInfo" class="mr-3 text-right hidden sm:block">
        <div class="text-sm font-medium text-gray-800">
          {{ userInfo.firstName }} {{ userInfo.lastName }}
        </div>
        <div class="text-xs text-gray-500">
          @{{ userInfo.username }}
        </div>
      </div>
      
      <UserAvatar 
        :src="userAvatar" 
        :alt="userName"
        size="2.5rem"
        class="border-2 border-blue-500"
      />
    </div>
  </nav>
</template>

<script>
import { computed } from 'vue'
import { useTelegram } from '@/utils/telegram'
import Logo from './Logo.vue'
import UserAvatar from './UserAvatar.vue'

export default {
  name: 'AppNavbar',
  components: {
    Logo,
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
          username: telegram.initDataUnsafe.user.username
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
      return 'User'
    })

    return {
      userInfo,
      userAvatar,
      userName
    }
  }
}
</script>