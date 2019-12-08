import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  TextInput,
} from 'react-native';

import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_HELLO, CHANGE_SAY } from '../../apollo/queryes';




const Home = (props) => {
  const { data: { hello }} = useQuery(GET_HELLO);
  const [changeHello] = useMutation(CHANGE_SAY);
  const [text, setText] = React.useState('');

  function pressHandler() {
    changeHello({ variables: { say: text } });
    setText('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>{hello.say}</Text>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={setText}
      />
      <Button
        title="Submit"
        onPress={pressHandler}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: 300,
    height: 44,
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'black',
  }
});

export default Home;



