import React from 'react';
import Layout from '../components/Layout';

function Cartpage () {
    return (
        <Layout>
            <div className='container'>
                <h1 className='mb-3'>CartPage</h1>
                <button  className='btn btn-success' >
                    Add data to fireBase
                </button>

                <button className='btn btn-success ml-2' >
                    Add data from fireBase
                </button>
            </div>
        </Layout>
    );
}

export default Cartpage;
