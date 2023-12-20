import React, { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import { FaReact } from "react-icons/fa";
import { SiNodedotjs } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { useLateral } from '../../LateralContext';

const SaibaMais = () => {
    const { lateral, setLateral } = useLateral();

    return (
        <div className="w-full flex justify-center flex-col">
            <section className='flex'>
                <Sidebar />
                <div 
                className='flex items-center justify-center items-center w-full h-screen'>
                    <div onClick={() => {
                    setLateral('flex');
                    }} 
                    className='absolute flex flex-col justify-between items-center h-8 top-4 left-4 menuButton hidden'>
                        <span className='bg-red-500 w-10 h-2'></span>
                        <span className='bg-red-500 w-10 h-2'></span>
                        <span className='bg-red-500 w-10 h-2'></span>
                    </div>  
                    <article class="bg-black text-white p-6 rounded-lg w-9/12 h-4/6 font-mono">
                        <div class="flex justify-between items-center">
                            <div class="flex space-x-2 text-red-500">
                            <div class="w-3 h-3 rounded-full bg-red-500"></div>
                            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div class="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <p class="text-sm">bash</p>
                        </div>
                        <div class="mt-4">
                            <p class="text-green-400"># Gestão de Recursos & Produtos</p>
                            <p class="text-white">__Tecnologias usadas</p>
                            <p class="text-white"> import Frontend from "./React/Tailwind CSS/React Router/Axios";</p>
                            <p class="text-white"> import Backend from "./Node.js/Express.js/body-parser/Mongoose/cors";</p>
                            <p class="text-white"> import DataBase from "./Mongodb Atlas";</p>
                            <p class="text-green-400">Desenvolvido por <span className='underline'>Antonio Jânderson</span>!</p>
                        </div>
                        <div className='flex justify-around items-center h-40 mt-20 w-full'>
                            <div className='flex flex-col justify-center items-center'>
                                <FaReact className='w-20 h-20 text-green-400' />
                                Frontend
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <SiNodedotjs className='w-20 h-20 text-green-400' />
                                Back-end
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <BiLogoMongodb className='w-20 h-20 text-green-400' />
                                DataBase
                            </div>
                        </div>
                    </article>

                </div>
            </section>
        </div>
    );
}

export default SaibaMais;
