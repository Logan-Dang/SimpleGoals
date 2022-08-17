import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { Home, NewGoal } from './pages';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='New Goal' component={NewGoal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
