import React, { useState } from 'react';
import './select.css'

export default function MySelect({ options }) {
  const [selectedOption, setSelectedOption] = useState();

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="custom-select">
      <select value={selectedOption} onChange={handleChange}>
        <option value="sage">Sage</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
