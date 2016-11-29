import React, {Component} from 'react'
import NavBar from './NavBar'
import SearchBar from './SearchBar'
import AddMovie from './AddMovie'
import MovieList from './MovieList'
import {randomMovies} from '../helpers'

class App extends Component {

    state = {
       movies: [],
       view: false,
       search: false,
       filterdMovies: []
    }

   componentWillMount() {
      this.setState({movies: randomMovies(250)})
   }

   toggleView = () => this.setState({view: !this.state.view})

   filter = (filter, term) => {
      const movies = this.state.movies

      const cleanTerm = term.toString().toLowerCase()

      if(term) {
        this.setState({search: true})

        if(filter === 'Title') this.filterByTitle(cleanTerm, movies)
        if(filter === 'Year') this.filterByYear(cleanTerm, movies)
        if(filter === 'Rating') this.filterByRating(cleanTerm, movies)
        if(filter === 'Genre') this.filterByGenre(cleanTerm, movies)
        if(filter === 'Actors') this.filterByActors(cleanTerm, movies)
      } else {
        this.setState({search: false})
      }
   }

   filterByActors(name, movies) {
      this.setState({filterdMovies: movies
        .filter(movie => movie.actors
          .filter(actor => actor.toLowerCase().includes(name)).length)})
   }

   filterByGenre(genre, movies) {
      this.setState({
        filterdMovies: movies.filter(movie => movie.genre.toLowerCase().includes(genre))
      })
   }

   filterByRating(rating, movies) {
      this.setState({
        filterdMovies: movies.filter(movie => +movie.rating === +rating)
      })
   }

   filterByYear(year, movies) {
      this.setState({
        filterdMovies: movies.filter(movie => movie.year.toString().includes(year))
      })
   }

   filterByTitle(title, movies) {
      this.setState({
        filterdMovies: movies.filter(movie => movie.title.toLowerCase().includes(title))
      })
   }

   displayView(view) {
     const movies = this.state.search ? this.state.filterdMovies : this.state.movies

      if (view) {
         return (
           <AddMovie
             movies={movies}
             addMovie={this.addMovie}
             toggleView={this.toggleView}
           />
         )
      } else {
         return (
            <div>
               <SearchBar filter={this.filter}/>
               <MovieList movies={movies} remove={this.removeMovie}/>
            </div>
         )
      }
   }

   removeMovie = (title) => {
      const movies = this.state.movies.filter(movie => {
        return movie.title !== title
      })
      this.setState({movies})
   }

   addMovie = (movie) => {
      if (movie.actors.length) {
         movie.actors = movie.actors.split(', ')
      }

      this.setState({
         movies: this.state.movies.concat([movie])
      })
   }

   render() {
      return (
         <div>
            <NavBar toggleView={this.toggleView}/>
            <div className='container App'>
               <div className='row'>
                  <div className='col-md-offset-2 col-md-8'>
                     {this.displayView(this.state.view)}
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default App
