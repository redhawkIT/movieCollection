import React, {PropTypes} from 'react'
import Movie from './Movie'

const MovieList = ({movies, remove}) => (
  <div className='list-group MovieList'>
    {
       movies.map((movie, i) => (
         <Movie key={i} movie={movie} remove={remove}/>
       ))
    }
  </div>
)

MovieList.propTypes = {
  remove: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired
}

export default MovieList
