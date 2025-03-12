<template>
  <button
    class="button"
    :class="[`button--${variant}`, { 'button--disabled': disabled }]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary' | 'outline'
  disabled?: boolean
}>()

defineEmits<{
  (e: 'click'): void
}>()
</script>

<style scoped>
.button {
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
}

.button--primary {
  background-color: #4CAF50;
  color: white;
}

.button--secondary {
  background-color: #2196F3;
  color: white;
}

.button--outline {
  background-color: transparent;
  border: 1px solid #4CAF50;
  color: #4CAF50;
}

.button--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style> 