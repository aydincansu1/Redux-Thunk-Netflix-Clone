import { useSelector } from "react-redux";
import { baseImgUrl } from "../contants";
import Loader from "./Loader";

const Hero = () => {
  //storda tutulan verilere eris
  const store = useSelector((store) => store.movieReducer);

  const i = Math.floor(Math.random() * 20);

  const randomMovie = store.popularMovies[i];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      {!randomMovie ? (
        <Loader />
      ) : (
        <>
          <div className="flex flex-col items-center p-5 gap-3 justify-center">
            <h1 className=" text-3xl font-bold">{randomMovie.title}</h1>
            <p className="text-start">{randomMovie.overview}</p>
            <p className="text-center">
              <span>IMDB: </span>
              <span className="text-yellow-400">
                {randomMovie.vote_average.toFixed(1)}
              </span>
            </p>
            <div className="flex gap-5">
              <button className="p-2 bg-red-600 rounded-md hover:bg-red-700">
                Filmi Izle
              </button>
              <button className="p-2  rounded-md bg-blue-600 hover:bg-blue-700">
                Listeye Ekle
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              className="rounded-md img-fluid  my-4 hero-img max-h-[300px]"
              src={baseImgUrl.concat(randomMovie.backdrop_path)}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
