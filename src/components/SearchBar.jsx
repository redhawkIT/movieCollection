import React, {PropTypes, Component} from 'react'

const Btn = ({searchBy, term}) => (
  <li>
     <a href='#' onClick={() => searchBy(term)}>{term}</a>
  </li>
)

class SearchBar extends Component {

    state = {
       searchBy: 'Title',
       term: undefined
    }

   onInputChange = (e) => this.props.filter(this.state.searchBy, e.target.value)

   searchBy = (item) => this.setState({searchBy: item})

   render() {
      return (
         <div className='input-group'>
            <input
              type='text'
              className='form-control'
              placeholder={`Search by ${this.state.searchBy}`}
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <div className='input-group-btn'>
               <button
                 type='button'
                 className='btn btn-default dropdown-toggle'
                 data-toggle='dropdown'
                 aria-haspopup='true'
                 aria-expanded='false'>
                  Filter by
                  <span className='caret'/>
               </button>
               <button className='btn btn-default' onClick={this.props.toggleView}>Add Movie</button>
               <ul className='dropdown-menu dropdown-menu-right'>
                 <Btn searchBy={this.searchBy} term='Year'/>
                 <Btn searchBy={this.searchBy} term='Rating'/>
                 <Btn searchBy={this.searchBy} term='Actors'/>
                 <Btn searchBy={this.searchBy} term='Genre'/>
                 <Btn searchBy={this.searchBy} term='Title'/>
               </ul>
            </div>
         </div>
      )
   }
}

SearchBar.propTypes = {
  filter: PropTypes.func.isRequired
}
export default SearchBar
