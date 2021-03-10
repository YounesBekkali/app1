import React,{useState} from 'react';

export const Button = ({label}) => {
    let [nome,setNumero] = useState(label)

    const alertProva = () => {
        setNumero((prevState) => prevState + 1)
    }

    return (
        <>
            <button class="bottone" onClick={alertProva}>
                {nome}
            </button>
        </>
    )
}
