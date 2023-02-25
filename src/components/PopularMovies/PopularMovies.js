import React from 'react'
import './PopularMovies.css'
import axios from 'axios';
import MovieCard from '../MoveCard/MovieCard';
import "./PopularMovies.css"

function PopularMovies() {
    const apiKey = process.env.REACT_APP_API_KEY;
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const imageBase = process.env.REACT_APP_IMAGE_BASE;

    //create an array for page numbers
    const pageNumbers = [1,2,3,4,5,6,7,8,9,10]

    const [page, setPage] = React.useState(1)

    const [upcomingMovies, setUpcomingMovies] = React.useState([])
    //create state to move through the movies
    

    React.useEffect(
        ()=>{
            //call api to get upcoming movie data
            axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}&page=${page}`)
            .then(res =>{
                console.log(res.data.results)
                //store data in state
                setUpcomingMovies(res.data.results)
            })
            .catch(err => console.log(err))

        }, [page]  //dependency
    )


  return (
    <div className='popular-container'>
        <h3>PopularMovies</h3>
        <div className='popular-wrapper'>
           { upcomingMovies.map(item =><MovieCard key={item.id} movie={item}
                 imageUrl={item.poster_path}
                 imgHeight="300px" 
                    radius="16px" 
                    cardStyle="popular-card"/>)}
        </div>
        <div className='page-numbers'>
        <p>Select Page</p>
            {
                pageNumbers.map(num => 
                <p key={num} onClick={()=>setPage(num)}>{num}</p>
                )
            }
        </div>
        </div>
  )
}

export default PopularMovies