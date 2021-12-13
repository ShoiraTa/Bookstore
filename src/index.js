import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import App from './App';
import Categories from './components/Categories';

ReactDOM.render(
  <div className="container">
    <Router>
      <header>
        <nav>
          <Link className="logo" to="/"> Bookstore</Link>
          <Link className="link" to="/">Books</Link>
          <Link className="link" to="/categories">Categories</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>

    </Router>
  </div>,
  document.getElementById('root'),
);
