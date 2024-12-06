import { useEffect, useState } from 'react';
// import { axiosInstance } from '../../../Shared/lib/axiosInstance';
import PriceApi from '../../../Entites/Price/PriceApi'

function ShowUpdPrice(props) {

    const [price, setPrice] = useState('')

    const loadPrice = async () => {
        try {
            const price = await PriceApi.getPrice()
            setPrice( price )
        } catch (error) {
            console.log(error.response.data)
            return error
        }
    }
    useEffect(()=>{
        loadPrice()
    },[])

    return (
        <>
            <h1> Ваша цена </h1>
            <ul>
                <li>
                    Взрослые будни:{price}
                </li>
                <li>
                    Взрослые выходные:{Math.floor(price*1.5)}
                </li>
                <li>
                    Детские будни:{Math.floor(price/2)}
                </li>
                <li>
                    Детские выходные:{Math.floor((price*1.5)/2)}
                </li>
            </ul>
        </>
    );
}

export default ShowUpdPrice;