import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.stocks.map((stock, index) => {
            return <Stock key={index} stock={stock} handleClick={this.props.purchaseStock}
            />
          })
        }
      </div>
    );
  }

}

export default StockContainer;
