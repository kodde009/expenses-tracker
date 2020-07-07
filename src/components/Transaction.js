import React from 'react'

export const Transaction = ({ transaction }) => {
    return (
    <li className="minus">
        { transaction.text } <span>{ transaction.amount }</span>
        <button className="delete-btn">X</button>
    </li>
    )
}
