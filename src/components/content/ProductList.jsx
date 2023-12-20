import React from 'react';
import Product from './Product';
import Vazio from '../../assets/vazio.png';

const ProductList = ({ products }) => {
    return (
        <div className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Lista de Produtos</h2>
            {products.length === 0 ? (
                <div className='flex flex-col items-start justify-center'>
                    <img src={Vazio} className='w-[200px] h-[200px]' alt="imagem de caixa vazia" />
                    <p className="text-gray-500">Nenhum produto disponível.</p>
                </div>)
                :
                (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        
                        {products.map((product) => (
                            <Product 
                            key={product.id} 
                            id={product._id}
                            product={product} 
                            name={product.name} 
                            price={product.price} 
                            quantity={product.quantity} 
                            />
                        ))}
                    </div>
                )}
        </div>
    );
};

export default ProductList;
