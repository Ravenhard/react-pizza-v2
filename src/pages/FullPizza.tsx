import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const FullPizza:React.FC = () => {
    let [pizza, setPizza] = useState<{
        imageUrl: string;
        name: string;
        price: number;
    }>();
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchPizza(){
            try {
                const {data} = await  axios.get('https://63dffffc59bccf35dabd934d.mockapi.io/pizza-items/' + id)

                setPizza(data);
            } catch (error){
                console.log('ошибка')
                navigate('/')
            }
        }
        fetchPizza();
    },[])

    if (!pizza) return <>"Загрузка..."</>

    return (
        <div className='container'>
            <img src={pizza.imageUrl}/>
            <h2>{pizza.name}</h2>
            <h4>{pizza.price}</h4>
        </div>
    );
}

export default FullPizza;