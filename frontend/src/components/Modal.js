import { useState } from "react"

const Modal = ({activation}) => {
    const [transaction, setTransaction]= useState({
        coin: undefined,
        date: undefined, 
        units: undefined, 
        pricePerUnit: undefined
    })

    let submitted = (event) => {
        event.preventDefault()
        activation(false)
        console.log(transaction)
    }
    return(
        <>
            <form >
                <label>
                    Coin: 
                    <input type="text" onChange={(e) => setTransaction({...transaction, coin: e.target.value})}/>
                </label>
                <label>
                    Date: 
                    <input type="date" onChange={(e) => setTransaction({...transaction, date: e.target.value})}/>
                </label>
                <label>
                    Quantity: 
                    <input type="number" onChange={(e) => setTransaction({...transaction, units: e.target.value})}/>
                </label>
                <label>
                    Price($): 
                    <input type="number" onChange={(e) => setTransaction({...transaction, pricePerUnit: e.target.value})}/>
                </label>
                <button onClick={submitted}>Submit</button>
            </form>
        </>
    )
}

export default Modal