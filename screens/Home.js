import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
export default function Home(props) {
  const removeTODO = (item) => {
    delete global.todos[item];
    if (Object.keys(global.todos).length == 0)
      global.todos = {nothingTODO: {txt: "nothing TODO"}}; // non c'e' nulla da fare...
    props.navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  const renderTODO = (todo) => {
    if (todo == 'nothingTODO')
      return (
        <View style={styles.todoContainer}>
          <Text style={styles.todo}>{global.todos[todo].txt}</Text>
        </View>
      );
    else if (global.todos[todo].picURI)
      return (
        <View style={styles.todoContainer}>
          <TouchableOpacity onPress={() => removeTODO(todo)}>
            <Text style={styles.todo}>{global.todos[todo].txt}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('Picture', { todoId: todo })
            }>
            <Image
              style={styles.picture}
              source={{ uri: global.todos[todo].picURI }}
            />
          </TouchableOpacity>
        </View>
      );
    else
      return (
        <View style={styles.todoContainer}>
          <TouchableOpacity onPress={() => removeTODO(todo)}>
            <Text style={styles.todo}>{global.todos[todo].txt}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('Picture', { todoId: todo })
            }>
            <Image
              style={styles.picture}
              source={require('../assets/camera-icon-transparent.png')}
            />
          </TouchableOpacity>
        </View>
      );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={Object.keys(global.todos)}
        renderItem={({ item }) => renderTODO(item)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    margin: 5,
    padding: 5,
    backgroundColor: 'orange',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    padding: 8,
  },
  todoContainer: {
    flexDirection: 'row',
  },
  picture: {
    width: 25,
    height: 25,
    margin: 5,
    padding: 5,
    textAlign: 'center',
    backgroundColor: 'lightblue',
  },
});
