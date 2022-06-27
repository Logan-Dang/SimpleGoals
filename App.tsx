import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';

export default function App() {
  let currentTitle;
  let defaultSub;
  let backgroundImage = require('./assets/sunrise.png');
  let screenWidth = Dimensions.get('window').width;
  if (getTime() >= 6 && getTime() < 12) {
    currentTitle = 'Good Morning!';
    defaultSub = "Let's get started";
  } else if (getTime() >= 12 && getTime() <= 18) {
    currentTitle = 'Good Afternoon!';
    defaultSub = 'How was lunch?';
  } else {
    currentTitle = 'Good Evening!';
    defaultSub = "Let's review your day";
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} resizeMode='cover' />
      <Text style={styles.title}>{currentTitle}</Text>
      <Text style={styles.subtitle}>{defaultSub}</Text>
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
    fontSize: 24,
  },

  subtitle: {
    fontSize: 16,
    marginTop: '3%',
  },

  background: {
    width: Dimensions.get('window').width,
    height: '100%',
  },
});

function getTime() {
  const currentTime = new Date();
  const time = currentTime.getHours();
  return time;
}
