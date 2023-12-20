import React, { useState, useEffect } from 'react';
import Cabecalho from '../header/Header';
import Sidebar from './Sidebar';
import { CiSearch } from "react-icons/ci";
import { useLateral } from '../../LateralContext';


const Filter = () => {
    const { lateral, setLateral } = useLateral();
    const [valuesItems, setValuesItems] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/items', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(response => response.json())
        .then(data => {
            setValuesItems(data);
            setFilteredItems(data);  // Inicialmente, exiba todos os itens
        })
    }, []);

    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        setSearch(searchTerm);

        const filtered = valuesItems.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredItems(filtered);
    };
    
    return (
        
        <div className="w-full flex justify-center flex-col">
            <section className='flex'>
                <Sidebar />
                <div 
                className='flex flex-col justify-center 
                items-center w-full relative '>
                    
                    <div 
                    className='bg-green-600 absolute  top-0 flex items-center justify-around 
                    border-l-4 rounded-l-3xl h-16 text-white w-full'>
                        <div onClick={() => {
                        setLateral('flex');
                        }} 
                        className='absolute flex flex-col justify-between items-center h-8 top-4 left-4 menuButton hidden'>
                            <span className='bg-red-500 w-10 h-2'></span>
                            <span className='bg-red-500 w-10 h-2'></span>
                            <span className='bg-red-500 w-10 h-2'></span>
                        </div>     
                        <h2 className='font-bold text-xl'>Filtro de produtos</h2>
                        <div className='flex items-center h-7 w-4/12
                        border border-neutral-400 rounded-3xl'>
                            <input
                                type="search"
                                className='
                                border h-full rounded-l-3xl
                                no-outline pl-4 w-full text-black'
                                onChange={handleSearch}
                                placeholder='Name of product'
                            />
                            <CiSearch 
                            className='h-full w-8 border
                            border-none cursor-pointer' />
                        </div>
                    </div>
                    
                    <div className='flex flex-wrap justify-center mt-20 w-10/12'>
                        {filteredItems.map((item) => (

                            <div className='w-[300px] m-4 shadow-lg shadow-[#010814] p-4 rounded' 
                            key={item.id} 
                            >
                                <ul className=' '>
                                    <li><strong className='text-neutral-700'>Name:</strong> {item.name}</li>
                                    <li><strong className='text-neutral-700'>Price:</strong> ${item.price}</li>
                                    <li><strong className='text-neutral-700'>Quantity:</strong> {item.quantity}</li>
                                </ul>
                            </div>

                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Filter;
