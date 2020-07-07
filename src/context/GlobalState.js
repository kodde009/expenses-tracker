import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
// Initial State 

const initialState = {
    transactions: [
        { id: 1, text: 'flower', amount: -20 },
        { id: 2, text: 'salary', amount: 300 },
        { id: 3, text: 'book', amount:  -10 },
        { id: 4, text: 'camera', amount: 250 },
    ]
}

// create context 

export const Globalcontext = createContext(initialState);

// Provider component 

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (
        <Globalcontext.Provider
            value={{ transactions: state.transactions }}
        >
            { children }
        </Globalcontext.Provider>
    )
}