import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Product = ({ id, name, price, quantity }) => {
    const [confirm, setConfirm] = useState(false);
    const [upValue, setUpValue] = useState(false);
    const [newValue, setNewValue] = useState({});

    const handleValue = (e) => {
        const { name, value } = e.target;
        setNewValue({ ...newValue, [name]: value });
    };

    
    const confirmValues = (id) => {
        const updatedProduct = newValue;

        if (Object.keys(updatedProduct).length === 0) {
            console.error('Dados vazios. Não enviando a requisição.');
            return;
        }

        Axios.put(`http://localhost:3000/items/${id}`, updatedProduct)
            .then(response => {
                // Implemente a lógica após a atualização bem-sucedida, se necessário
                console.log(`Atualizar produto com ID ${id}:`, response.data);
            }).catch(error => console.error(error));
    };

    const deleteItem = (id) => {
        Axios.delete(`http://localhost:3000/items/${id}`)
        .then(response => {
            console.log(`Deletando produto com o ID ${id}:`, response.data);
        }).catch(error => console.error(error))
    }

    return (
        <div>
            <form className="bg-white p-2 shadow-md rounded-md mb-4">
                <label className="text-lg mb-2 block">
                    Nome: { name }
                {upValue && (
                    <input
                        onChange={handleValue}
                        type="text"
                        name="name"
                        value={newValue.name || ''}
                        className='border'
                        placeholder='novo nome'
                    />
                )}
                </label>
                <label className="text-gray-700 mb-2 block">Preço: ${price}
                {upValue && (
                    <input
                        onChange={handleValue}
                        type="text"
                        name="price"
                        value={newValue.price || ''}
                        className='border'
                        placeholder='novo preço'
                    />
                )}
                </label>
                <label className="text-gray-700 mb-4 block">Quantidade em Estoque: {quantity}
                {upValue && (
                    <input
                        onChange={handleValue}
                        type="text"
                        name="quantity"
                        value={newValue.quantity || ''}
                        className='border'
                        placeholder='nova quantidade'
                    />
                )}
                </label>
                <button
                type='button'
                    className="bg-[#010814] text-white py-2 px-4 mr-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                    onClick={() => {
                        setUpValue(true);
                        setConfirm(true);
                    }}
                >
                    Editar
                </button>

                {!confirm && (
                    <button
                        className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:shadow-outline-red"
                        onClick={() => deleteItem(id)}
                    >
                        Excluir
                    </button>
                )}
                {confirm && (
                    <button
                        className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:shadow-outline-red"
                        onClick={() => confirmValues(id)}
                    >
                        Confirmar
                    </button>
                )}
            </form>
        </div>
    );
};

export default Product;
