import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopular } from "../redux/action/movieActions";
import Hero from "../components/Hero";
import { getGenres } from "../redux/action/genreAction";
import MovieList from "../components/MovieList";
import genreReducer from "./../redux/reducers/genreReducer";
import Loader from "../components/Loader";

const MainPage = () => {
  const genreState = useSelector((store) => store.genreReducer);

  const dispatch = useDispatch();

  // apiden populer filmleri al ve store'a aktar

  useEffect(() => {
    dispatch(getPopular());
    dispatch(getGenres());
  }, []);

  return (
    <div>
      <Hero />

      {genreState.isLoading ? (
        <Loader />
      ) : genreState.isError ? (
        <p>{genreState.isError}</p>
      ) : (
        genreState.genres.map((genre) => (
          <MovieList key={genre.id} genre={genre} />
        ))
      )}
    </div>
  );
};

export default MainPage;
