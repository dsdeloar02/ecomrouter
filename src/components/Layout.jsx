import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Phonecart from './Phonecart';
import Search from './Search';

const Layout = (props) => {
    return (
        <div>
            <Header/>
            <Search/>
            <div className='content pt-16' >
                {props.children}
            </div>
            <Phonecart/>
            <Footer/>
            
        </div>
    );
}

export default Layout;
