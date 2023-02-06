import React from 'react';
import Navbar from '../Components/Navbar';
import Home_Hero from './Home_Components/Home_Hero';
import Modren_Technlogy from '../Pages/Home_Components/Modren_Technlogy';
import Product from './Home_Components/Product';
import Price_Sec from './Home_Components/Price_Sec';

function Home() {
    return (
        <>
            <Navbar />
            <Home_Hero />
            <Modren_Technlogy />
            <Product />
            <Price_Sec />
        </>
    )
}

export default Home