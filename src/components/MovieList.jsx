import React, {PropTypes} from 'react'
import Movie from './Movie'

const MovieList = ({movies, remove}) => {
  if(movies.length) {
    return (
      <div className='list-group MovieList'>
        {
           movies.map((movie, i) => (
             <Movie key={i} movie={movie} remove={remove}/>
           ))
        }
      </div>
    )
  } else {
    return <h3>No movies found</h3>
  }
}

MovieList.propTypes = {
  remove: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired
}

export default MovieList
