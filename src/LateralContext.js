import React, { createContext, useContext, useState } from 'react';

const LateralContext = createContext();

export const LateralProvider = ({ children }) => {
    const [lateral, setLateral] = useState('');

    return (
        <LateralContext.Provider value={{ lateral, setLateral }}>
        {children}
        </LateralContext.Provider>
    );
    };

    export const useLateral = () => {
    const context = useContext(LateralContext);
    if (!context) {
        throw new Error('useLateral must be used within a LateralProvider');
    }
    return context;
};
