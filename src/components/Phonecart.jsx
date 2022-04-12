import React, { useState, useEffect } from 'react';
import Single from './Single';

const Phonecart = () => {
    
    
    const [products, setProducts] = useState([])

   

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='grid md:grid-cols-3'>
            {
                products.map( tceta => <Single key={tceta.id} tceta = {tceta} />)
            }
        </div>
    );
}

export default Phonecart;
