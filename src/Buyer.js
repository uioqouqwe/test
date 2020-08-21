import React from 'react';
import './Buyer.scss';
import getBuyers from './BuyersArray';

class Buyer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
        buyer: {},
        numberOfPages: 0,
    };
  }
  
  componentDidMount() {
    const buyers = getBuyers();
    const buyersId = Number(this.props.buyerId);
    this.setState({
        buyer: buyers.filter(item => item.id === buyersId)[0]
    });
  }

  render() {
    return (
      <div className='buyers'>
        <table className='buyers-table'>
            <thead>
                <tr>
                    <th>ID покупателя</th>
                    <th>Имя покупателя</th>
                    <th id='average-check'>Средний чек</th>
                    <th id='number-of-purchases'>Количество покупок</th>
                    <th id = 'total-sum'>Общая выручка</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <td>{this.state.buyer.id}</td>
                  <td>{this.state.buyer.name}</td>
                  <td>{this.state.buyer.averageCheck}</td>
                  <td>{this.state.buyer.numberOfPurchases}</td>
                  <td>{this.state.buyer.totalSum}</td>
                </tr>
            </tbody>
        </table>
      </div>
    );
  }
}

export default Buyer;