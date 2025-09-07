// Удалите неиспользуемые импорты
// import { init, backButton, mainButton, showAlert, showConfirm } from '@twa-dev/sdk'

export const initTelegramWebApp = () => {
  // Проверяем, доступен ли Telegram Web App
  if (window.Telegram?.WebApp) {
    // Инициализация Telegram Web App
    window.Telegram.WebApp.ready()
    
    console.log('Telegram Web App initialized')
    console.log('Platform:', window.Telegram.WebApp.platform)
    console.log('User:', window.Telegram.WebApp.initDataUnsafe.user)
  } else {
    console.warn('Telegram Web App not available')
  }
}

export const useTelegram = () => {
  const webApp = window.Telegram?.WebApp
  
  if (!webApp) {
    console.warn('Telegram Web App not available')
    return null
  }

  return {
    // Основные методы
    initData: webApp.initData,
    initDataUnsafe: webApp.initDataUnsafe,
    platform: webApp.platform,
    version: webApp.version,
    
    // Кнопки
    backButton: {
      show: () => webApp.BackButton.show(),
      hide: () => webApp.BackButton.hide(),
      onClick: (callback) => webApp.BackButton.onClick(callback),
    },
    
    mainButton: {
      show: () => webApp.MainButton.show(),
      hide: () => webApp.MainButton.hide(),
      setText: (text) => webApp.MainButton.setText(text),
      onClick: (callback) => webApp.MainButton.onClick(callback),
      setParams: (params) => webApp.MainButton.setParams(params),
    },
    
    // Всплывающие окна
    showAlert: (message, callback) => webApp.showAlert(message, callback),
    showConfirm: (message, callback) => webApp.showConfirm(message, callback),
    
    // Закрытие приложения
    close: () => webApp.close(),
    
    // Тема
    themeParams: webApp.themeParams,
    setHeaderColor: (color) => webApp.setHeaderColor(color),
    setBackgroundColor: (color) => webApp.setBackgroundColor(color),
  }
}

export const formatUserInfo = (user) => {
  if (!user) return null
  
  return {
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    username: user.username,
    languageCode: user.language_code,
    isPremium: user.is_premium,
    photoUrl: user.photo_url,
  }
}

// Добавим функцию для получения URL аватарки
export const getUserAvatarUrl = (user) => {
  if (!user) return null
  
  // Если есть photo_url от Telegram, используем его
  if (user.photo_url) {
    return user.photo_url
  }
  
  // Иначе создаем граватар или используем дефолтную аватарку
  return `/default-avatar.png`
}