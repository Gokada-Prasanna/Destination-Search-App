import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onSearch = event => {
    this.setState({searchInput: event.target.value})
    console.log(event.target.value)
  }

  getFilteredList = () => {
    const {destinationsList} = this.props
    const {searchInput} = this.state

    const filteredList = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return filteredList
  }

  render() {
    const {searchInput} = this.state
    const filteredList = this.getFilteredList()

    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-container">
            <input
              type="search"
              onChange={this.onSearch}
              placeholder="search"
              value={searchInput}
              className="search-input"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="destinationsList-container">
            {filteredList.map(eachDestination => (
              <DestinationItem
                key={eachDestination.id}
                destinationDetails={eachDestination}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
