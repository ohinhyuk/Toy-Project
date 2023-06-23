import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail({ text , image }){

    const [load, setLoad] = useState(false);
    const [movie , setMovie] = useState();

    const {id} = useParams();
    
    const getMovie = async () => { 
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
        
        setMovie(json.data.movie);
        setLoad(true);
        return;
    }

    useEffect(() => { 
        getMovie()
     } , []);

    return(
        <div>
            <h1>Detail page</h1>
            {load ?
            <div>
            <h3>{movie.title}</h3>
            <img src={movie.medium_cover_image}></img>
            </div>
                :<h3>Loading...</h3>
            }
        </div>
    );
}

export default Detail;