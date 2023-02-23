import React from 'react'
import Rating from '../Rating/Rating';
import "./MovieCard.css"



function MovieCard({movie, imageUrl, imgHeight, radius, cardStyle}) {
    const imageBase = process.env.REACT_APP_IMAGE_BASE;


    const imageStyle={
        height: imgHeight,
        width: "200px",
        // backgroundImage: `url("${imageBase}${movie?.poster_path}")`,
        backgroundImage: `url("${imageBase}${imageUrl}")`,
        // borderRadius: "16px",
        borderRadius: radius,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative"  //needed in order to use absolute on other stuff
    }
        
    


  return (
    // <div className="movie-card">
    <div className={cardStyle}>
        <div style={imageStyle}>
            <div className="movie-info-top">
                <p>{movie.vote_average}</p>
            </div>
            <div className="movie-info-bottom">
                <p>{movie.title}</p>
                <Rating />
            </div>
            {
                cardStyle==="top-rated-card"?
                <p>{movie.title}</p>
                :
                null
            }

        </div>
    </div>
  )
        }

export default MovieCard