import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import HomeScreen from '@screens/Home'
import SplashScreen from '@screens/Splash'
import UserDetail from '@screens/UserDetail'

import { RootStackParamList } from './src/types/routes'

const Stack = createNativeStackNavigator<RootStackParamList>()

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
            <Stack.Screen name="Profile" component={UserDetail} />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </QueryClientProvider>
  )
}
