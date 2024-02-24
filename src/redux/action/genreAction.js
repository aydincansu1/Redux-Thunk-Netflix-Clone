// kategori verilerini al ve reducar a aktar

import axios from "axios";
import { ActionTypes } from "../actionTypes";
import { options } from "../../contants";

export const getGenres = () => (dispatch) => {
  //api istegi atildiginda reducar'a haber ver
  dispatch({
    type: ActionTypes.GENRES_LOADING,
  });
  // api istegi at
  axios
    .get("https://api.themoviedb.org/3/genre/movie/list", options)
    .then((res) =>
      dispatch({
        type: ActionTypes.GENRES_SUCCESS,
        payload: res.data.genres,
      })
    )
    .catch((err) =>
      dispatch({
        type: ActionTypes.GENRES_ERROR,
        payload: err.message,
      })
    );
  // veri gelirse reducara haber ver
  // hata olursda reduca haber ver
};
