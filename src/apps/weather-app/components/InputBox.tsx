import React, { useState } from 'react';

interface InputBoxProps {
  onSearch: (city: string) => void;
}

const InputBox: React.FC<InputBoxProps> = ({ onSearch }) => {
  const [cityInput, setCityInput] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCityInput(event.target.value);
  };

  const handleSearch = () => {
    onSearch(cityInput);
  };

  return (
    <div className="search">
      <input
        id="cityInput"
        type="text"
        placeholder="Enter city name"
        spellCheck={false}
        value={cityInput}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>
        <img src="/assets/images/search.png" alt="" />
      </button>
    </div>
  );
};

export default InputBox;
