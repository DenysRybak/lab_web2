import React from 'react';
import './Header.css'; // Підключіть свій CSS файл тут, якщо потрібно

const Header = () => (
  <header className="header-container">
    <div className='logo'>
      <span className="brand-name">House</span><span className="highlighted">staff</span>
    </div>
    <button className="catalog-button">Каталог</button>
    <div className='search-bar'>
      <input type='text' placeholder='Пошук...' />
      <button>Пошук</button>
    </div>
    <div className="divider"></div>
    <nav>
      <ul className='nav'>
        <li>Сторінка</li>
        <li>Корзина</li>
      </ul>
    </nav>
  </header>
);

export default Header;
