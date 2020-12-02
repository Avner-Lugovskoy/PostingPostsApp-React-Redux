import { CREATE_POST, FETCHED_POSTS } from "./types";

const initialState = {
  posts: [],
  fetchedPosts: [],
};

// Pure Function работают только на входные параметры при этом не основываются на глобальных объектах вся логика у них завязана только внутри них
export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return { ...state, posts: state.posts.concat([action.payload]) };
    case FETCHED_POSTS:
      return { ...state, fetchedPosts: action.payload };
    //return { ...state, posts: [...state.posts, action.payload] }
    default:
      return state;
  }
};
