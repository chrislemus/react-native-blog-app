import React, { useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

 const BlogForm = ({ onSubmit, initialValues}) => {
  const [title, setTitle] = useState(initialValues?.title || '')
  const [content, setContent] = useState(initialValues?.content || '')

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title:</Text>
      <TextInput value={title} onChangeText={val => setTitle(val)} style={styles.input}/>
      <Text style={styles.label}> Content:</Text>
      <TextInput value={content} onChangeText={val => setContent(val)} style={styles.input}/>
      <Button title="Save Blog Post" onPress={() => onSubmit(title, content)}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom:15,
    padding: 5,
    margin: 5
  },
  label: {  
    fontSize: 20,
    marginBottom:10,
    marginLeft: 5,
    fontWeight: 'bold'
  }
});

export default BlogForm