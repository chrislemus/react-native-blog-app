import { StatusBar } from 'expo-status-bar';
import React, {useContext,useLayoutEffect} from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import {Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons'

 function BlogIndex({navigation}) {
  const {state, addBlogPost, deleteBlogPost} = useContext(Context)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Create")}>
          <Feather name="plus" size={30}/>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      {/* <Button title="Add Post" onPress={addBlogPost}/> */}
      <FlatList 
        data={state}
        keyExtractor={item => `${item.id}`}
        renderItem={({item}) => {
          return(
            <TouchableOpacity onPress={() => navigation.navigate("Show", {id: item.id})}>
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather name='trash' style={styles.icon}/>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  icon: {
    fontSize: 24,
    color: 'red'
  }
});

export default BlogIndex
