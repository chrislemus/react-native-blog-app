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
    </View>
  );
}

const styles = StyleSheet.create({});
