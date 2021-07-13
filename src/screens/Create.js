import React, {useContext, useState} from 'react';
import {Context} from '../context/BlogContext';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default function Create({navigation}) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const {addBlogPost} = useContext(Context)

  const navigateHome = () => navigation.navigate("BlogIndex")
  return (
    <View >
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput value={title} onChangeText={val => setTitle(val)} style={styles.input}/>
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput value={content} onChangeText={val => setContent(val)} style={styles.input}/>
      <Button title="Add Blog Post" onPress={() => addBlogPost(title, content, navigateHome)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 8,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom:15,
    padding: 5,
    margin: 5
  },
  label: {  
    fontSize: 20,
    marginBottom:10,
    marginLeft: 5
  }
});
