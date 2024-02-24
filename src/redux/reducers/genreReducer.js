import { ActionTypes } from "../actionTypes";

const initialState = {
  genres: [],
  isLoading: false,
  isError: false,
};

const genreReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GENRES_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.GENRES_ERROR:
      return {
        ...state,
        isError: payload,
        isLoading: false,
      };
    case ActionTypes.GENRES_SUCCESS:
      return {
        ...state,
        isError: false,
        isLoading: false,
        genres: payload,
      };
    default:
      return state;
  }
};
export default genreReducer;
