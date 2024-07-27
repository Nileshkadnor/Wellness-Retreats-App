import React, { useState } from 'react';
// import './Filter.css'; 

const Filter = ({ onFilter }) => {
  const [date, setDate] = useState('');
  const [type, setType] = useState('');

  const handleFilter = () => {
    onFilter({ date, type });
  };

  return (
    <div className="filter">
     <div className="date-filter-wrapper">
      <label
        htmlFor="date-input"
        className={`date-filter-label ${date ? 'hidden' : ''}`}
      >
        Filter by date
      </label>
      <input
        type="date"
        id="date-input"
        className="date-filter-input"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">Filter by Types</option>
        <option value="Yoga">Yoga</option>
        <option value="Meditation">Meditation</option>
        <option value="Detox">Detox</option>
      </select>
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default Filter;
