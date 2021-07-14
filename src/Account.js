import React, { useState } from 'react';
const Account = () => {
    const [balance, setBalance] = useState(200);
    const [disabled,setDisabled]=useState(true)

    const deposit = () => {
        setBalance(balance + 100)
        setDisabled(false)
    }

    const withDraw = () => {
        setBalance(balance - 100)
        if(balance==300){
            setDisabled(true)
        }
    }

    return (
        <div>
            <h1>Account</h1>
            <h2>${balance}</h2>
            <button onClick={deposit}>Deposit</button>
            <button onClick={withDraw} disabled={disabled}>WithDraw</button>
        </div>
    )
}
export default Account;