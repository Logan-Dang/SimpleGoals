import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TextInput,
} from 'react-native';

export default function NewGoal() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    height: '100%',
    margin: 0,
  },

  title: {
    fontSize: 24,
  },
});
