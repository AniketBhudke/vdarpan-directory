import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import SearchResults from './pages/SearchResults';
import Categories from './pages/Categories';
import BusinessDetail from './pages/BusinessDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/business/:id" element={<BusinessDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;