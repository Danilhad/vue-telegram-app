<template>
  <div 
    class="inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full"
    :class="[sizeClasses, border ? 'border-2 border-blue-500' : '']" 
    :style="{ 
      width: size, 
      height: size
    }"
  >
    <img
      v-if="src"
      :src="src"
      :alt="alt"
      class="w-full h-full object-cover"
    >
    <span
      v-else
      class="text-gray-600 font-medium"
      :class="textSize"
    >
      {{ alt ? alt.charAt(0).toUpperCase() : 'U' }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'UserAvatar',
  props: {
    src: String,
    alt: {
      type: String,
      default: 'User'
    },
    size: {
      type: String,
      default: '2.5rem'
    },
    border: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    sizeClasses() {
      const sizes = {
        '2rem': 'text-xs',
        '2.5rem': 'text-sm',
        '3rem': 'text-base',
        '4rem': 'text-lg'
      }
      return sizes[this.size] || 'text-sm'
    },
    textSize() {
      return this.sizeClasses
    }
  }
}
</script>