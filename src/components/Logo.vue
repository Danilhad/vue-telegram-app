<template>
  <svg
    :class="className"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Telegram логотип -->
    <circle cx="20" cy="20" r="20" fill="#24A1DE"/>
    <path d="M27.5 13.75L10 22.5L15 25L22.5 18.75L15 25L17.5 30L27.5 13.75Z" fill="white"/>
  </svg>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    className: {
      type: String,
      default: 'w-8 h-8'
    }
  }
}
</script>