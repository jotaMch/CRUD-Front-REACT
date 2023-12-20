import React, { useState, useEffect } from 'react';

const ProductForm = ({ formSubmit }) => {
    const [formData, setFormData] = useState({ name: '', price: '', quantity: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormData({ name: '', price: '', quantity: '' });
        formSubmit(formData)
        try{
            const response = await fetch('http://localhost:3000/doc', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            })
            if(response){
                console.log("dados enviados com sucesso!")
            } else{
                console.log('falha ao enviar dados')
            }
            
        }catch(erro){
            console.log(erro)
        }
        //console.log(formData)
    };

    return (
        <form onSubmit={handleSubmit} 
        className="
        w-10/12 shadow-lg shadow-neutral-300 
        mt-28 p-4 rounded-md ">
            <label className="block mb-2">
                <span className="text-lg text-neutral-600 font-semibold">Nome:</span>
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="block w-full mt-1 p-2 border rounded-md"
                required
                />
            </label>
            <label className="block mb-2">
                <span className="text-lg text-neutral-600 font-semibold">Preço:</span>
                <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="block w-full mt-1 p-2 border rounded-md"
                required
                />
            </label>
            <label className="block mb-4">
                <span className="text-lg text-neutral-600 font-semibold">Quantidade em Estoque:</span>
                <input
                type="text"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="block w-full mt-1 p-2 border rounded-md"
                required
                />
            </label>
            <button
                type="submit"
                className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
            >
                Adicionar Produto
            </button>
        </form>
    );
};

export default ProductForm;
