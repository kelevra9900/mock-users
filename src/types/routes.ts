import { User } from './user'

export type RootStackParamList = {
  Splash: undefined
  Home: undefined
  Profile: { user: User }
}
