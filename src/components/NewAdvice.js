import React, {useContext, useEffect} from 'react'
import { AdviceContext } from "./AdviceContext";
import GetAdvice from "./GetAdvice"

export default function NewAdvice() {
    const [advice, setAdvice] = useContext(AdviceContext)


    return (
        <div>
            <button onClick={()=> GetAdvice(setAdvice)}>Click for new Advice</button>
        </div>
    )
}
