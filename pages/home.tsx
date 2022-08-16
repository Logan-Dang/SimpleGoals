import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';

import { Button } from '../components';
import { db } from '../database';
import { useState } from 'react';

export default function Home({ navigation }) {
  let currentTitle;
  let defaultSub;
  let backgroundImage = require('../assets/sunrise.png');
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

  const [data, setData] = useState<Goal[]>([]);

  interface Goal {
    id: number;
    name: string;
    description: string;
  }

  db.transaction((tx) => {
    tx.executeSql('SELECT * FROM Goal', null, (txObj, { rows: { _array } }) => {
      console.log(_array);
      setData(_array);
    });
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        resizeMode='cover'
        style={styles.background}>
        <Text style={styles.title}>{currentTitle}</Text>
        <Text style={styles.subtitle}>{defaultSub}</Text>
        <Button
          title='New Goal'
          onPress={() => navigation.navigate('New Goal')}
        />
      </ImageBackground>
    </View>
  );
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

  subtitle: {
    fontSize: 16,
    marginTop: '3%',
  },

  background: {
    alignItems: 'center',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    paddingTop: '15%',
    margin: 0,
  },
});

function getTime() {
  const currentTime = new Date();
  const time = currentTime.getHours();
  return time;
}
