import React, {useContext, useLayoutEffect, useState, useEffect} from 'react';
import {Context} from '../context/BlogContext';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, TextInput} from 'react-native';
import {EvilIcons}from '@expo/vector-icons'

export default function Edit({route, navigation}) {
  const blogId = route.params.id
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const {state, editBlogPost} = useContext(Context)
  const blogPost = state.find((blog) => blog.id === blogId)
  useLayoutEffect(() => {
    setTitle(blogPost.title)
    setContent(blogPost.content)
  }, [blogPost])
  const callback = () => navigation.pop()


  return (
    <View >
      <Text style={styles.label}>Title:</Text>
      <TextInput value={title} onChangeText={val => setTitle(val)} style={styles.input}/>
      <Text style={styles.label}> Content:</Text>
      <TextInput value={content} onChangeText={val => setContent(val)} style={styles.input}/>
      <Button title="Save Changes" onPress={() => editBlogPost(title, content, blogId, callback)}/>
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