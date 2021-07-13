import React, {useContext, useLayoutEffect} from 'react';
import {Context} from '../context/BlogContext';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import {EvilIcons}from '@expo/vector-icons'

export default function Show({route, navigation}) {
  const blogId = route.params.id
  const {state} = useContext(Context)
  const blogPost = state.find((blog) => blog.id === blogId)
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Edit", {id: blogId})}>
          <EvilIcons name="pencil" size={35}/>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View >
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>

    </View>
  );
}

const styles = StyleSheet.create({

});
