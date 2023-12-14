import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

const OptionItem = props => {
  const {item} = props
  const {id, capitalDisplayText} = item
  return <option value={id}>{capitalDisplayText}</option>
}

class Capitals extends Component {
  state = {id: countryAndCapitalsList[0].id}

  changeItem = event => {
    this.setState({id: event.target.value})
  }

  render() {
    const {id} = this.state
    const countryItem = countryAndCapitalsList.find(each => each.id === id)
    const {country} = countryItem

    return (
      <div className="mainContainer">
        <div className="insideContainer">
          <h1 className="heading">Countries And Capitals</h1>
          <select className="selectItem" onChange={this.changeItem}>
            {countryAndCapitalsList.map(eachItem => (
              <OptionItem item={eachItem} key={eachItem.id} />
            ))}
          </select>
          <span className="span">is capital of which country?</span>
          <h1 className="country">{country}</h1>
        </div>
      </div>
    )
  }
}
export default Capitals
