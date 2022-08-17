import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';

import { Button } from '../components';
import { db } from '../database';
import { useEffect, useState } from 'react';
import { LongTermGoal } from '../database';

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

  const [goals, setGoals] = useState<LongTermGoal[]>([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql('SELECT * from LongTermGoal', [], (tsx, results) => {
        setGoals(results.rows._array);
      });
    });
  }, []);

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
        {/* TODO: Get rid of this button, instead the goals should just be displayed here. Probably make a LongTermGoal component. */}
        <Button title='Log Goals' onPress={() => console.log(goals)} />
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
