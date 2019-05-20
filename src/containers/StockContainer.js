import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  //message in terminal for useless constructor
  //Did not use constructor to set initial state
  // constructor(props) {
  //   super(props)
  // }
  //Note: this.state is only available to class ClassName extends Component

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.stocks.map((stock, index) => {
            return <Stock key={index} stock={stock}/>
          })
        }
      </div>
    );
  }

}

export default StockContainer;
