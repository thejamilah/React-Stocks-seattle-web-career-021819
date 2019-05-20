import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  constructor() {
    super()
    this.state = {
      stocks: [],
      displayStocks: [],
      userPortfolio: [],
    }
  }

  //It's a good idea to ude componentDidMount while using fetch statements. Good spot for network requests. Gets instantiated/fired upon component construction/is created.
  componentDidMount() {
    fetch("http://localhost:3000/stocks")
    .then(response => response.json())
    .then(json => {
      console.log('json:', json)

      this.setState({
        stocks: json,
        displayStocks: json
      })
    })
  }

  buyStock() {
    
  }

  render() {
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.displayStocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
