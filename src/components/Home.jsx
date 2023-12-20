import React, { useState, useEffect } from 'react';
import ProductList from './content/ProductList';
import ProductForm from './content/ProductForm';
import Sidebar from './sidebar/Sidebar';
import { useLateral } from '../LateralContext';

const Home = () => {
    const { lateral, setLateral } = useLateral();
    const [products, setProducts] = useState([]);

    
    const handleAddProduct = (newProduct) => {
        setProducts([...products, { id: Date.now(), ...newProduct }]);
        console.log(products.id)
    };
    
    useEffect(() => {
        fetch('http://localhost:3000/items', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(response => response.json())
        .then(data => {
            setProducts([...products, ...data]);
            })
    }, [])

    
    return (
        <div className="">
            <div className='flex h-screen reponsiveHg'>
                <Sidebar />
                <section className="flex main mx-auto w-full relative">
                    <div onClick={() => {
                        setLateral('flex');
                    }} 
                    className='absolute flex flex-col justify-between items-center h-8 top-2 left-2 menuButton hidden'>
                        <span className='bg-red-500 w-10 h-2'></span>
                        <span className='bg-red-500 w-10 h-2'></span>
                        <span className='bg-red-500 w-10 h-2'></span>
                    </div>                
                    <div 
                    className="flex justify-center items-start w-4/12 responsiveWd responsive-item">
                        <ProductForm formSubmit={handleAddProduct} />
                    </div>
                    <div className="w-8/12 h-5/6 overflow-auto scrollbar-thin mt-28 list ml-4 responsiveWd responsive-margin rounded-3xl">
                        <div className='h-5/6 sombra rounded-3xl' ></div>
                        <ProductList products={products}  />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;