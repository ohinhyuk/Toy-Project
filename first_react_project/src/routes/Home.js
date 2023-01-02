import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../component/Button";

function Home(){
    const [movies , setMovies] = useState([]);
    const [load , setLoad] = useState(false);

    const getMovies = async () => { 
    const json = await(
    await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")).json();

    setMovies(json.data.movies);
    setLoad(true);
    
  }

  const onClick = () => {
    alert("it is clicked");
  }


  useEffect( () => {
    getMovies();
  }, [])

  return(
    <div>
      <h1>Movie List</h1>

      <Button text="This is Button" onClick={onClick}  />
      <Button text="Hello" onClick={onClick} />
      {load ? 
      <ul>
        {movies.map((movie,index) => <li key={index}><h4><Link to={`./movie/${movie.id}`}>{movie.title}</Link></h4> <img src={movie.medium_cover_image}></img></li> )}
      </ul>
      
      : <h3>Loading...</h3>}
    </div>
  );
}

export default Home;