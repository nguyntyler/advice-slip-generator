import React, {useContext, useState} from 'react'
import { AdviceContext } from "./AdviceContext";

export default function Advice() {
    const [advice, setAdvice] = useContext(AdviceContext)
    return (
        <div>
            <h1>{advice}</h1>
        </div>
    )
}
