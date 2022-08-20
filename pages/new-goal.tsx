import {
  StyleSheet,
  Text,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  findNodeHandle,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import { useState } from 'react';
import { Button, SomeText } from '../components';
import { db } from '../database';

export default function NewGoal() {
  const [form, setForm] = useState({
    name: '',
    description: '',
  });

  function onPress() {
    const { name, description } = form;

    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO LongTermGoal (name, description) values(?,?)',
        [name, description],
        null,
        (transaction, error) => {
          console.log(error.message);
          return true;
        }
      );
    });

    db.transaction(() => {});
    setForm({ name: '', description: '' });
  }

  return (
    <KeyboardAvoidingView behavior='padding'>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={styles.viewStyle}>
          <TextInput
            style={styles.textStyle}
            placeholder='Goal Name...'
            value={form.name}
            onChangeText={(name) => setForm({ ...form, name })}
          />
          <TextInput
            style={styles.textStyle}
            placeholder='Goal Description...'
            value={form.description}
            onChangeText={(description) => setForm({ ...form, description })}
          />
          {/* For now, only resets the form. onPress should actually submit to SQLite */}
          <Button onPress={onPress} title='Submit' />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    marginTop: 200,
    borderRadius: 6,
  },

  viewStyle: {
    flexGrow: 1,
  },
});
