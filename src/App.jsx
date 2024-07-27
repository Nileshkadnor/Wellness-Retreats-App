import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import RetreatList from './components/RetreatList';
import Filter from './components/Filter';
import Search from './components/Search';
import Pagination from './components/Pagination';
import './App.css';
import Footer from './components/Footer';

const App = () => {
  const [retreats, setRetreats] = useState([]);
  const [filteredRetreats, setFilteredRetreats] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchRetreats();
  }, [currentPage]);

  const fetchRetreats = async () => {
    try {
      const response = await axios.get(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${currentPage}&limit=5`);
      setRetreats(response.data);
      setFilteredRetreats(response.data);
      setTotalPages(response.headers['x-total-pages']);
    } catch (error) {
      console.error('Error fetching retreats:', error);
    }
  };

  const handleFilter = async (filterParams) => {
   
  };

  const handleSearch = async (searchTerm) => {
    try {
      const response = await axios.get(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?search=${searchTerm}`);
      setFilteredRetreats(response.data);
    } catch (error) {
      console.error('Error searching retreats:', error);
    }
  };

  return (
    <div className="app">
      <Header />
      <Filter onFilter={handleFilter} />
      <Search onSearch={handleSearch} setSearchTerm={setSearchTerm} />
      <RetreatList retreats={filteredRetreats} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      
      <Footer/>
    </div>
  );
};

export default App;
