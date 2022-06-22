import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.title}>Good Morning!</Text>
      <Text style = {styles.subtitle}>Let's get started</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: '15%',
  },

  title: {
    fontSize: 24
  },

  subtitle: {
    fontSize: 16,
    marginTop: '3%'
  }
});
