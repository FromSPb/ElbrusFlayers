import { useEffect, useState } from 'react';
// import { axiosInstance } from '../../../Shared/lib/axiosInstance';
import PriceApi from '../../../Entites/Price/PriceApi'
import Card from './Card';

function ShowUpdPrice(props) {

    const [price, setPrice] = useState('')

    const loadPrice = async () => {
        try {
            const price = await PriceApi.getPrice()
            setPrice( price )// прилетает косарь
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
            <h1> wtyf dphjckjuj{price}</h1>
            wtyf lkz dphjckjuj yf ds {price*2}
            <Card />
        </>
    );
}

export default ShowUpdPrice;