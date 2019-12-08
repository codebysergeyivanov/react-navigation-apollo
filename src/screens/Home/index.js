import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  TextInput,
} from 'react-native';

import { useQuery, useMutation } from '@apollo/react-hooks';
import { 
  GET_HELLO, 
  CHANGE_SAY,
  GET_PERSON,
} from '../../apollo/queries';




const Home = (props) => {
  const { data: { hello }} = useQuery(GET_HELLO);
  const [changeHello] = useMutation(CHANGE_SAY);
  const [text, setText] = React.useState('');
  const { data: personData, loading: personLoading, error: personError } = useQuery(GET_PERSON);

  function pressHandler() {
    changeHello({ variables: { say: text } });
    setText('');
  }

  function showPersoneName() {
    if (personLoading) return <Text>Loading...</Text>
    if (personError) return <Text>{`Error! ${error.message}`}</Text>
    return <Text>{personData.person.name}</Text>
  }

  return (
    <SafeAreaView style={styles.container}>
      {showPersoneName()}
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



