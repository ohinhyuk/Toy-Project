import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home(){

  const [movies , setMovies] = useState([]);
  const [load , setLoad] = useState(true);

  const movieAPI = async () => {
    const json = await(
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoad(false);

  } 

  useEffect(() => {
    movieAPI()
  }, []);
  

//   console.log(movies);

  return(
    <div>
      <h1>Movies!</h1>
      {load ? <p>loading...</p> : 
      
      movies.map((movie) => 
      <Movie key={movie.id} 
      id={movie.id}
      title={movie.title}
      medium_cover_image ={movie.medium_cover_image} 
      summary={movie.summary}
      genres={movie.genres} />
      )
      }
    </div>
  );
}

export default Home;