import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import Categories from './components/Categories';
import store from './redux/configureStore/configureStore';

ReactDOM.render(
  <Provider store={store}>
    <div className="container">
      <Router>
        <header>
          <nav>
            <Link className="logo" to="/"> Bookstore</Link>
            <Link className="link" to="/">Books</Link>
            <Link className="link" to="/categories">Categories</Link>
            <i className="fas fa-user" />
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>

      </Router>
    </div>
  </Provider>,
  document.getElementById('root'),
);
