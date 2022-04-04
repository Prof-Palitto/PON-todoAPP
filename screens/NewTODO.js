import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
export default function NewTODO(props) {
  let testo = '';

  function inserisci() {
    delete global.todos['nothingTODO'];
    let id = testo.replace(/ /g, '-');
    global.todos[id] = {};
    global.todos[id].txt = testo;
    console.log(global.todos);
    props.navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>New ToDo</Text>
      <TextInput
        style={styles.input}
        placeholder="Inserisci cosa fare"
        onChangeText={(t) => (testo = t)}
      />
      <Button title="Inserisci" onPress={inserisci} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 20,
    borderBottomWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
