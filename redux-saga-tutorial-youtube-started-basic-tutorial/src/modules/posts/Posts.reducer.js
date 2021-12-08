import { GET_POSTS_SUCCESS,GET_POSTS } from "./Posts.actions";

const initialState = {
  isLoading: false,
  posts: [],
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return{
        ...state,
        isLoading: true
      }
      case GET_POSTS_SUCCESS:
        return{
          ...state,
          isLoading:false,
          posts: payload,
        }
    default:
      return state;
  }
};
