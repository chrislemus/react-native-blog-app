import React, {useContext} from 'react';
import {Context} from '../context/BlogContext';
import { View} from 'react-native';
import BlogForm from '../Components/BlogForm'

export default function Edit({route, navigation}) {
  const blogId = route.params.id
  const {state, editBlogPost} = useContext(Context)
  const blogPost = state.find((blog) => blog.id === blogId)
  const callback = () => navigation.pop()
  const onSubmit = (title, content) => {
    editBlogPost(title, content, blogId,callback)
  }
  const initialValues = {
    title: blogPost.title,
    content: blogPost.content,
  }
  return (
    <View >
      <BlogForm onSubmit={onSubmit} initialValues={initialValues}/>
    </View>
  );
}

