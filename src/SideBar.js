import React, {useState} from 'react';
import './SideBar.scss';

function SideBar({avatarUrl}) {
    return (
      <div className='sidebar'>
        <img src={avatarUrl} className='img'/>
        <div>
            <a href='#'>Терминалы</a>
            <a href='#'>Покупатели</a>
        </div>
        <p>© 2020 Mizhidon Grigory</p>
      </div>
    );
}

export default SideBar;