import React, { useContext } from 'react';
import { Transaction } from './Transaction';


import { Globalcontext } from '../context/GlobalState';


export const TransactionsList = () => {
    const { transactions } = useContext(Globalcontext);

    return (
        <>
            <h3>History</h3>
            <ul className="list">
               {
                   transactions.map(transaction => (
                        <Transaction key={Transaction.id} transaction={Transaction} />
                   ))
               }
            </ul>
        </>
    )
}
