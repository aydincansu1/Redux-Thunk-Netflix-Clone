import { options } from "../../contants";
import axios from "axios";
import { ActionTypes } from "../actionTypes";

//appiden filmleri alan ve stor'a aktaran aksiyon
export const getPopular = () => (dispatch) => {
  //yuklenme durumunu reducer'a bildir
  dispatch({
    type: ActionTypes.MOVIES_LOADING,
    // apiden populer filmleri al
  });
  axios
    .get("https://api.themoviedb.org/3/movie/popular", options)
    // basarili olursa reducara aktar
    .then((res) =>
      dispatch({
        type: ActionTypes.MOVIES_SUCCESS,
        payload: res.data.results,
      })
    )
    // basarisiz olursada reducara bildir
    .catch((err) =>
      dispatch({
        type: ActionTypes.MOVIES_ERROR,
        payload: err.message,
      })
    );
};
