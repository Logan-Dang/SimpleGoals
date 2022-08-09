import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  findNodeHandle,
} from 'react-native';

import { useState } from 'react';

import { Button, SomeText } from '../components';

import { FieldError } from 'react-hook-form';

export default function NewGoal() {
  const [goalName, setGoalName] = useState('');

  return (
    <View>
      <TextInput
        style={styles.textStyle}
        placeholder='Goal Name...'
        value={goalName}
        onChangeText={(goal) => setGoalName(goal)}
      />
      {/* For now, only resets the form. onPress should actually submit to SQLite */}
      <Button onPress={() => setGoalName('')} title='Submit' />
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    marginTop: 200,
  },
});
