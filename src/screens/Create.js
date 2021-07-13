import React, {useContext} from 'react';
import {Context} from '../context/BlogContext';
import BlogForm from '../Components/BlogForm'
import { StyleSheet, View } from 'react-native';


export default function Create({navigation}) {

  const {addBlogPost} = useContext(Context)
  const navigateHome = () => navigation.navigate("BlogIndex")
  const onSubmit = (title, content) => {
    addBlogPost(title, content, navigateHome)
  }

  return (
    <View >
      <BlogForm onSubmit={onSubmit}/>
      {/* <Text style={styles.label}>Enter Title:</Text>
      <TextInput value={title} onChangeText={val => setTitle(val)} style={styles.input}/>
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput value={content} onChangeText={val => setContent(val)} style={styles.input}/>
      <Button title="Add Blog Post" onPress={() => addBlogPost(title, content, navigateHome)}/> */}
    </View>
  );
}

const styles = StyleSheet.create({});
