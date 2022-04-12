import React,{useState} from 'react';
import Search from './Search';

const Sresult = () => {
  const loadPhonesData = () => {
    const inputField = document.getElementById("input-filed");
    isDisplayShow("spinner-toogler", "block");
    const inputFieldValue = inputField.value;
    const searchUrl = `https://openapi.programming-hero.com/api/phones?search=${inputFieldValue}`;
    fetch(searchUrl)
      .then((res) => res.json())
      .then((data) => displayPhones(data.data));
    inputField.value = "";
  };
  return (
    <div>
      <div>
        <input type="text"
          placeholder='Search'
          value={product}
          onChange={inputEvent}
        />
        <Search name={product} />
      </div>
    </div>
  );
}

export default Sresult;

