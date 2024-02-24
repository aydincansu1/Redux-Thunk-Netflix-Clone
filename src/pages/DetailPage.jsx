import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseImgUrl, options } from "../contants";
import Loader from "../components/Loader";
import DetailDisplay from "../components/DetailDisplay";
import millify from "millify";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import PlayerCard from "../components/PlayerCard";

const DetailPage = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `
        https://api.themoviedb.org/3/movie/${id}?append_to_response=videos,credits`,
        options
      )
      .then((res) => setMovie(res.data));
  }, []);

  return (
    <div>
      {!movie && <Loader />}
      {movie && (
        <div>
          {/*ust alan*/}
          <div className="relative h-[20vh] md:h-[50vh]">
            <img
              className="w-full object-cover h-full"
              src={baseImgUrl + movie.backdrop_path}
              alt={movie.title}
            />
            <div className="absolute bg-black inset-0 grid place-content-center bg-opacity-50 ">
              <span className="text-3xl font-semibold">{movie.title}</span>
            </div>
          </div>
          {/*orta alan*/}
          <div className=" grid grid-cols-1 md:grid-cols-2  my-5">
            {/*sol alan*/}
            <div className="my-5">
              <DetailDisplay data={movie.genres} title="Kategoriler" />
              <DetailDisplay
                data={movie.spoken_languages}
                title="Konusulan Diller"
              />
              <DetailDisplay
                data={movie.production_companies}
                title="Yapimci Sirketler"
              />
              <DetailDisplay
                data={movie.production_countries}
                title="Yapimci Ulkeler"
              />
            </div>

            {/*sag alan*/}
            <div className="my-5">
              {movie.overview}
              <p className="my-4">
                <span className="font-semibold ">Bütçe : </span>
                <span className="text-green-300">
                  {movie.budget === 0
                    ? "Bilinmiyor"
                    : millify(movie.budget) + " $"}
                </span>
              </p>
              <p>
                <span className="font-semibold ">Gelir : </span>
                <span className="text-green-300">
                  {movie.revenue === 0
                    ? "Bilinmiyor"
                    : millify(movie.budget) + " $"}
                </span>
              </p>
            </div>
          </div>
          {/* alt kısım */}
          <div>
            <Splide
              options={{
                autoWidth: true,
                gap: "10px",
                rewind: true,
                lazyLoad: true,
              }}
            >
              {movie.credits.cast.map((player) => (
                <SplideSlide>
                  <PlayerCard key={player.credit_id} player={player} />
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
