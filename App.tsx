import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { Home } from './pages';

export default function App() {
  return (
    <NavigationContainer>
      <Home />
    </NavigationContainer>
  );
}
