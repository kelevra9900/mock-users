import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {QueryClient,QueryClientProvider} from '@tanstack/react-query';


import HomeScreen from '@screens/Home';
import UserDetail from '@screens/UserDetail';
import {RootStackParamList} from './src/types/routes';
import SplashScreen from '@screens/Splash';

const Stack = createNativeStackNavigator<RootStackParamList>();

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
          />
          <Stack.Screen
            name="Home"
            options={{headerShown: false}}
            component={HomeScreen}
          />
          <Stack.Screen
            name="Profile"
            component={UserDetail}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}