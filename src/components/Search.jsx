import React from 'react';

const Search = (inputFieldValue) => {
   const product = `https://openapi.programming-hero.com/api/phones?search=${inputFieldValue}`
    return (
        <div>
            <img src="{product}" alt="search" />
        </div>
    );
}

export default Search;


