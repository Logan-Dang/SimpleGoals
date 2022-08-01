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

import { Button, SomeText } from '../components';

import { FieldError } from 'react-hook-form';

export default function NewGoal() {
  return (
    <View>
      <TextInput style={styles.textStyle} value={'please work'} />
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    marginTop: 200,
  },
});
