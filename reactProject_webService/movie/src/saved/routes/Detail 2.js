import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail(){
    const {id} = useParams();
    // console.log(id);

    const [movie, setMovie] = useState();
    const [load , setLoad] = useState(true);

    
    const getMovie = async () => { 
        const json = await(
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();

        setMovie(json.data.movie);
        setLoad(false);
        return ;
    }

    console.log(movie);

    useEffect( () => {
        getMovie()
    }
    , []);

    return(
        <div>
            <h2>Detail Page</h2>
            {load ? <h3>Loading...</h3> : 
            
            <div>
            <h3>{movie.title_long}</h3>

            <img src={movie.medium_cover_image}></img>
            
            <h4>( Rating : {movie.rating})</h4>
            <h4>Run time : {movie.runtime}분</h4>
            
            <h5><span>description (short)</span> <br></br>{movie.description_intro}</h5>

            <p><strong>Go to : </strong> <a href={movie.url}>{movie.url}</a></p>
            </div>
            }
        </div>
    ) 
}

export default Detail;