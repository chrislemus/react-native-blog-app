import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const randId = () => Math.floor(Math.random() * 999999);
function blogReducer(state, action) {
  switch (action.type) {
    case 'edit_blogpost':
      return [
        ...state.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
      ];
    case 'get_blogposts':
      return action.payload;
    case 'delete_blogpost':
      return [...state.filter((blog) => blog.id !== action.payload)];
    default:
      return state;
  }
}

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get('/blogposts');
    dispatch({ type: 'get_blogposts', payload: response.data });
  };
};

const addBlogPost = () => {
  return async (title, content, callback) => {
    await jsonServer.post('/blogposts', { title, content });
    if (callback) callback();
  };
};
const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, {
      title: title,
      content: content,
    });
    dispatch({ type: 'edit_blogpost', payload: { title, content, id } });
    if (callback) callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: 'delete_blogpost', payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
