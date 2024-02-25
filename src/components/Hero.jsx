import axios from "axios";
import React, { useState, useEffect } from "react";
import endPoints, { createImageUrl } from "../services/movieService";
const Hero = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios.get(endPoints.popular).then((res) => {
      const movies = res.data.results;
      console.log(movies);
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];
      console.log(randomMovie.original_title);
      setMovie(randomMovie);
    });
  }, []);
const truncate  =(str,length)=>{
if (!str) return ""
return str.length>length ? str.slice(0,length) + "...." : str

}
  if (!movie) {
    return (
      <>
        <p>Fetching .....</p>
      </>
    );
  }
  const { title, backdrop_path, release_date, overview } = movie;
  return (
    <div className="w-full h-[550px] lg:h-[850px]">
      <div className="w-full h-full ">
        <div className="absolute w-full h-[550PX] lg:h-[850px] bg-gradient-to-r from-black">
          <img className="w-full h-full object-cover object-top"
            src={createImageUrl(backdrop_path,"original")}
            alt={title}
          />
        </div>
        <div
          className="absolute
        w-full top-[10%] lg:top-[25%] p-4 md:p-8"
        >
          <h1 className="text-3xl md:text-6xl font-nsans-bold">{title}</h1>
          <div className="mt-8 mb-4">
            <button className="capitalize border bg-gray-300 text-black  px-5 py-2">play</button>
            <button className="capitalize border border-gray-300 ml-4 px-5 py-2">watch later</button>
          </div>

          <p className="text-gray-400 text-sm"> {release_date}</p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">{truncate(overview,165)}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
