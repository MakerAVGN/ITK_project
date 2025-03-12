export interface User {
  id: number
  name: string
  email: string
  role: 'admin' | 'user'
}

export interface UserState {
  data: User | null
  isLoading: boolean
  error: string | null
} 