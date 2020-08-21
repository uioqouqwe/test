import React from 'react';
import './Buyers.scss';

function Buyers() {
    return (
      <div>
        <table className='buyers-table'>
            <thead>
                <tr>
                    <th>ID покупателя</th>
                    <th>Имя покупателя</th>
                    <th>Средний чек</th>
                    <th>Количество покупок</th>
                    <th>Общая выручка</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
      </div>
    );
}

export default Buyers;