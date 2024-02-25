import React from "react";
import Hero from "./components/Hero";
import Movierow from "./components/Movierow";
import endPoints from "./services/movieService";
const Home = () => {
  return (
    <div>
      <Hero />
      <Movierow title="upcoming" url={endPoints.upcoming} />
      <Movierow title="trending" url={endPoints.trending} />
      <Movierow title="popular" url={endPoints.popular} />
      <Movierow title="comedy" url={endPoints.comedy} />
    </div>
  );
};

export default Home;
