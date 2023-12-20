import React, { useState } from 'react';

const Cabecalho = () => {
    
    return (
        <header 
        className="bg-[#102442] h-20 text-white">            
            <div className="container mx-auto flex justify-between items-center h-full">
                <h1 className="text-3xl font-bold mb-4 ">Gestão de Recursos e Produtos</h1>
                <nav>
                    <ul>
                        <li>Contato</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Cabecalho;