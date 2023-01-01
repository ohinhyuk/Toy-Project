import PropTypes from "prop-types";
import {Link } from "react-router-dom";

function Movie({id ,title , medium_cover_image , summary , genres}){

    return(
        <div>
        <h3 ><Link to={`/movie/${id}`}>{title}</Link></h3>
        <img src={medium_cover_image}></img>
        <p>{summary}</p>
        <ul>
          {genres.map(
            (genre) =>
            <li key={genre}>{genre}</li>
            )}
        </ul>
      </div>
    );
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    medium_cover_image:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;