import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { CatalogPage } from './pages/CatalogPage';

export function App() {
  return (
    <div>
      <h1>App</h1>
      <ul>
        <li>
          <Link to="/">Main Page</Link>
        </li>
        <li>
          <Link to="/catalog">Catalog Page</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="catalog" element={<CatalogPage />} />
      </Routes>
    </div>
  );
}
