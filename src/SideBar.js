import React from 'react';
import './SideBar.scss';
import {Link} from 'react-router-dom';

function SideBar({avatarUrl}) {
    return (
      <div className='sidebar'>
        <img src={avatarUrl} className='img'/>
        <div>
            <Link to='/terminals'>Терминалы</Link>
            <Link to='/buyers'>Покупатели</Link>
        </div>
        <p>© 2020 Mizhidon Grigory</p>
      </div>
    );
}

export default SideBar;