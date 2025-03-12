import { defineStore } from 'pinia'
import type { IAuthState } from './types'  
import type { User } from '@/entities/user/model/types'

interface AuthState {
  user: User | null
  isAuthenticated: boolean
}

export const useAuthStore = defineStore('auth', {
  state: (): IAuthState => ({
    user: null,
    isAuthenticated: false
  }),

  actions: {
    login(user: User) {
      this.user = user
      this.isAuthenticated = true
    },

    logout() {
      this.user = null
      this.isAuthenticated = false
    }
  }
}) 