import React from 'react';
import './Buyers.scss';
import getBuyers from './BuyersArray';
import {Link} from 'react-router-dom';

class Buyers extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
        buyers: [],
        numberOfPages: 0,
    };
  }
  customers = getBuyers();
  
  componentDidMount() {
    const buyers = getBuyers();
    this.setState({
        buyers
    });
  }

  sortHandler = (e) => {
    if(e.target.tagName === 'I') {
      if(e.target.parentNode.id === 'average-check') {
        if(e.target.classList.contains('up')) {
          this.setState({
            buyers: this.state.buyers.sort((a,b) => a.averageCheck - b.averageCheck)
          });
        }
        if(e.target.classList.contains('down')) {
          this.setState({
            buyers: this.state.buyers.sort((a,b) => b.averageCheck - a.averageCheck)
          });
        }
      }
      if(e.target.parentNode.id === 'number-of-purchases') {
        if(e.target.classList.contains('up')) {
          this.setState({
            buyers: this.state.buyers.sort((a,b) => a.numberOfPurchases - b.numberOfPurchases)
          });
        }
        if(e.target.classList.contains('down')) {
          this.setState({
            buyers: this.state.buyers.sort((a,b) => b.numberOfPurchases - a.numberOfPurchases)
          });
        }
      }
      if(e.target.parentNode.id === 'total-sum') {
        if(e.target.classList.contains('up')) {
          this.setState({
            buyers: this.state.buyers.sort((a,b) => a.totalSum - b.totalSum)
          });
        }
        if(e.target.classList.contains('down')) {
          this.setState({
            buyers: this.state.buyers.sort((a,b) => b.totalSum - a.totalSum)
          });
        }
      }
    }  
  }

  filterHandler = (e) => {
    this.setState({
      buyers: this.customers.filter(item => item.name.includes(e.target.value))
    });
  };

  buyersDisplayHandler = (e) => {
    if(e.target.tagName === 'SPAN') {
      if(e.target.innerText === 'по 5') {
        this.setState({
          buyers: this.customers.slice(0, 5)
        });
        this.setState({
          numberOfPages: Math.floor(this.customers.length / 5) + 1
        });
      }
      if(e.target.innerText === 'по 10') {
        this.setState({
          buyers: this.customers.slice(0, 10)
        });
        this.setState({
          numberOfPages: 0
        });
      }
      if(e.target.innerText === 'по 15') {
        this.setState({
          buyers: this.customers.slice(0, 15)
        });
        this.setState({
          numberOfPages: 0
        });
      }
    }
  };

  getPages = (number) => {
    let arr = [];
    for (let i = 1; i < number; i++){
      arr.push(<span key = {i}>{i}</span>)
    }
    return arr;
  };

  paginationHandler = (e) => {
    if(e.target.tagName === 'SPAN') {
      const pageNumbers = Number(e.target.innerText);
      this.setState({
        buyers: this.customers.slice(5 * (pageNumbers - 1), 5 * pageNumbers)
      });
    }
  }

  render() {
    return (
      <div className='buyers'>
        <table className='buyers-table'>
            <thead>
                <tr onClick={this.sortHandler}>
                    <th>ID покупателя</th>
                    <th>
                      Имя покупателя
                      <input type='text' className='input-name' onChange={this.filterHandler}></input>
                    </th>
                    <th id='average-check'>
                      Средний чек
                      <i className="arrow up"/>
                      <i className="arrow down"/>
                    </th>
                    <th id='number-of-purchases'>
                      Количество покупок
                      <i className="arrow up"/>
                      <i className="arrow down"/>
                    </th>
                    <th id = 'total-sum'>
                      Общая выручка
                      <i className="arrow up"/>
                      <i className="arrow down"/>
                    </th>
                </tr>
            </thead>
            <tbody>
              {this.state.buyers.map((item, index) => {
                return <tr key={index}>
                  <td><Link className='buyer-id' to={`/buyers/${item.id}`}>{item.id}</Link></td>
                  <td>{item.name}</td>
                  <td>{item.averageCheck}</td>
                  <td>{item.numberOfPurchases}</td>
                  <td>{item.totalSum}</td>
                </tr>
              })}
            </tbody>
        </table>
        <div className='number-of-buyers' onClick={this.buyersDisplayHandler}>
          <div>Отображать</div>
          <span>по 5</span>
          <span>по 10</span>
          <span>по 15</span>
        </div> 
        {(this.state.numberOfPages > 0) ?
            (<div className='pagination' onClick={this.paginationHandler}>
              {this.getPages(this.state.numberOfPages)}
            </div>) :
            ''
        }
      </div>
    );
  }
}

export default Buyers;