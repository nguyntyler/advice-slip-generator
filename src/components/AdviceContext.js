import React, { useState, createContext } from 'react'

export const AdviceContext = createContext();

export const AdviceProvider = props => {
    const [advice, setAdvice] = useState('Yoyoyo')

    return (
        <AdviceContext.Provider value={[advice, setAdvice]}>
            {props.children}
        </AdviceContext.Provider>
    )
}