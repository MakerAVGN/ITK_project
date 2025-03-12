<template>
  <header class="header">
    <div class="header__content">
      <h1 class="header__title">ITK Project</h1>
      <nav class="header__nav">
        <router-link to="/" class="header__link">Главная</router-link>
        <router-link to="/about" class="header__link">О нас</router-link>
      </nav>
      <div class="header__auth">
        <template v-if="isAuthenticated">
          <span class="header__user">{{ user?.name }}</span>
          <Button variant="outline" @click="handleLogout">Выйти</Button>
        </template>
        <template v-else>
          <Button variant="primary" @click="handleLogin">Войти</Button>
        </template>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAuthStore } from '@/features/auth/model/store'
import { Button } from '@/shared/ui/Button.vue'

const authStore = useAuthStore()

const isAuthenticated = computed(() => authStore.isAuthenticated)
const user = computed(() => authStore.user)

const handleLogin = () => {
  // Логика входа
}

const handleLogout = () => {
  authStore.logout()
}
</script>

<style scoped>
.header {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
}

.header__content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__title {
  margin: 0;
  font-size: 1.5rem;
  color: #333;
}

.header__nav {
  display: flex;
  gap: 1rem;
}

.header__link {
  color: #666;
  text-decoration: none;
  transition: color 0.2s;
}

.header__link:hover {
  color: #4CAF50;
}

.header__auth {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.header__user {
  color: #666;
}
</style> 