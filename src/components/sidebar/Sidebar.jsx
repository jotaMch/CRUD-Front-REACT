import React, {useState} from 'react';
import WebImg from '../../assets/web-img.png';
import { Link } from 'react-router-dom';
import { BiSolidChevronRight } from "react-icons/bi"; 
import { useLateral } from '../../LateralContext';

const Sidebar = () => {
    const { lateral, setLateral } = useLateral();

    const sideLeft = () => {
        setLateral('');
        console.log(lateral);
    }
    
    

    return (
        <aside className={`h-screen w-[450px] ${lateral === '' ? 'menu-display': 'lateral' } flex-col items-center  bg-[#010814] `}>
            
            <h1 className='bg-green-600 w-full text-2xl h-16 font-semibold mb-4 flex items-center justify-around text-white '>
                Gestão de Recursos e Produtos
                <div onClick={sideLeft}
                className='hidden display-reponsive flex-col justify-between items-end h-5 top-2 right-2'>
                    < BiSolidChevronRight className='bg-[#010814] rounded-full w-10 h-10' />
                </div>  
            </h1>
            <nav className='w-11/12 h-full flex flex-col justify-between items-center'>
                <ul className='w-full text-white'>
                    <Link to='/' >
                        <li onClick={sideLeft}
                        className='font-semibold h-10 w-full flex justify-center my-4 items-center'>
                            Adicionar novo produto
                        </li>
                    </Link>
                    <Link to='/filter' >
                        <li onClick={sideLeft}
                        className='font-semibold h-10 w-full flex justify-center my-4 items-center'>
                            Filtre se produto
                        </li>
                    </Link>
                    <Link to='/inf' >
                        <li onClick={sideLeft}
                            className='font-semibold h-10 w-full flex justify-center my-4 items-center'>
                            Mais informações
                        </li>
                    </Link>
                </ul>
                <img src={WebImg} className='mb-32' alt="web-img" />
            </nav>
        </aside>
    );
}

export default Sidebar;
