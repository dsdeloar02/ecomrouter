import  React, { useState, useEffect } from 'react';
import Card from './Card';


const Product = () => {
    const [category, setCategory] = useState([]); 

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(res => res.json())
        .then(data => setCategory(data.categories))
    }, []);

    return (
        <div className='grid md:grid-cols-3'>
            {
                category.map( cata => <Card key={cata.idCategory} cata = {cata} />)
            }
        </div>
    );
}

export default Product;
