import type { User } from '@/entities/user/model/types'

export interface IAuthState {  // переименовываем в IAuthState
    user: User | null
    isAuthenticated: boolean
  }