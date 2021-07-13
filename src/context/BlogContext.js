import createDataContext from './createDataContext';

const randId = () => Math.floor(Math.random() * 999999)
function blogReducer(state, action) {
  switch (action.type) {
    case 'add_blogpost':
      return [...state, {title: action.payload.title, content: action.payload.content, id: randId()}] 
    case 'edit_blogpost':
      return [...state.map(post => {
        if (post.id === action.payload.id) {
          return {
            id: action.payload.id,
            title: action.payload.title,
            content: action.payload.content
          }
        } else {
          return post
        }
      })] 
    case 'delete_blogpost':
      return [...state.filter(blog => blog.id !== action.payload)] 
    default:
      return state;
  }
}

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({type: 'add_blogpost', payload: {title, content}});
    callback()
  }
}
const editBlogPost = (dispatch) => {
  return (title, content, id, callback) => {
    dispatch({type: 'edit_blogpost', payload: {title, content, id}});
    callback()
  }
}

const deleteBlogPost = (dispatch) => {
  return (id) => dispatch({type: 'delete_blogpost', payload: id})
}


export const  {Context, Provider} = createDataContext(
  blogReducer, 
  {addBlogPost, deleteBlogPost, editBlogPost}, 
  [{title: 'THE TITLE', content: 'hefkasefkuh', id: randId()}]
)