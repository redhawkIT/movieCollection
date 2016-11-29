import React, {PropTypes} from 'react'

const Movie = ({movie, remove}) => (
  <a href='#' className='list-group-item Movie'>
     <div id='Movie-Title'>{`${movie.title} (${movie.year || 'N/A'})`}</div>
     <div id='Movie-Rating'>
        {`Rating: ${movie.rating || 'N/A'}`}
        <button
          type='button'
          className='btn btn-default Movie-Button'
          onClick={() => remove(movie.title)}
          >
            Delete
        </button>
     </div>
     <div id='Movie-Genre'>{`Genre: ${movie.genre || 'N/A'}`}</div>
     <div id='Movie-Actors'>{`Staring: ${movie.actors.join(', ') || 'N/A'}`}</div>
  </a>
)

Movie.propTypes = {
  remove: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired
}

export default Movie
