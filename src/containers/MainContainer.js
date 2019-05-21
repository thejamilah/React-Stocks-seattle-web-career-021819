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

    this.purchaseStock = this.purchaseStock.bind(this)
    this.sellStock = this.sellStock.bind(this)
    this.filterStock = this.filterStock.bind(this)
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

  purchaseStock(stock) {
    //using spread operator to copy the state of userPorfolio 
    console.log('BUY', stock)
    this.setState({
      userPortfolio: [...this.state.userPortfolio, stock]
    })
  }

  sellStock(stock) {
    console.log('SELL', stock)
    let userPortfolio = this.state.userPortfolio.filter(sell => {
      return sell !== stock
    })
    this.setState({userPortfolio})
  }

  filterStock() {

  }

  //This is the logic to check if the selected item exists; if it exists then just that clicked item should be removed
  // sellStock(stock) {
  //   let isSold = false
  //   let userPortfolio = this.state.userPortfolio.filter(sold => {
  //     if (!isSold && sold === stock) {
  //       isSold = true
  //       return false
  //     }
  //     return true
  //   })
  //   this.setState({userPortfolio})
  // }

  render() {
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.displayStocks} purchaseStock={this.purchaseStock} />

            </div>
            <div className="col-4">

              <PortfolioContainer userPortfolio={this.state.userPortfolio} sellStock={this.sellStock} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
