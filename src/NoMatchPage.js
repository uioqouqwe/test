import React from 'react';
import './NoMatchPage.scss';
import {Link} from 'react-router-dom';

function NoMatchPage() {
  return (
    <div>
        <p>
            Нет такой страницы
            Перейдите по ссылке <Link to='/'>сюда</Link>
        </p>
    </div>
  );
}

export default NoMatchPage;