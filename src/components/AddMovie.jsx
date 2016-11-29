import React, {Component, PropTypes} from 'react'

const defaultState = {
   title: '',
   rating: 'N/A',
   genre: 'N/A',
   actors: [],
   year: 'N/A',
   err: ''
}

const FormItem = ({name, onChange, val}) => (
  <div className='form-group'>
     <label className='control-label col-sm-2'>{`${name}:`}</label>
     <div className='col-sm-10'>
        <input
          className='form-control'
          placeholder={`Enter ${name}:`}
          value={val}
          onChange={onChange.bind(this, name)}/>
     </div>
  </div>
)

class AddMovie extends Component {

   state = defaultState

   handleSubmit = (event) => {
      event.preventDefault()
      if (this.isValidData()) {
         this.props.addMovie(this.state)
         this.props.toggleView()
      }
   }

   isValidData(state) {
      const {title} = this.state
      this.setState({err: ''})

      const isTitle = this.props.movies.filter(movie => {
         return movie.title.toLowerCase() === title.toLowerCase()
      })

      if (!title.length) {
         this.setState({err: 'A Title Is Required'})
         return false
      }
      if (isTitle.length) {
         this.setState({err: 'That movie already exists!'})
         return false
      }
      return true
   }

   errorMsg(err) {
     if(err.length) {
      return (
        <h5 className='text-warning text-center'>{err}</h5>
      )
     }
   }

   onChange = (item, e) => this.setState({[item.toLowerCase()]: e.target.value})

   render() {
     const {title, year, rating, genre, actors, err} = this.state
      return (
        <form className='form-horizontal' onSubmit={this.handleSubmit}>
          {this.errorMsg(err)}
          <FormItem onChange={this.onChange} name='Title' val={title}/>
          <FormItem onChange={this.onChange} name='Year' val={year}/>
          <FormItem onChange={this.onChange} name='Rating' val={rating}/>
          <FormItem onChange={this.onChange} name='Genre' val={genre}/>
          <FormItem onChange={this.onChange} name='Actors' val={actors}/>
           <div className='form-group'>
              <div className='col-sm-offset-2 col-sm-10'>
                 <button type='submit' className='btn btn-default'>Submit</button>
              </div>
           </div>
        </form>
      )
   }
}

AddMovie.propTypes = {
  addMovie: PropTypes.func.isRequired,
  toggleView: PropTypes.func.isRequired
}

export default AddMovie
