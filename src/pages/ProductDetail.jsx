import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const ProductDetail = () => {
    const{id}=useParams
    const[detail,setDetail]=useState({})
    
    
    useEffect(()=> {
        axios.get(`https://fakestoreapi.com/products/${id}`).
        then((res)=> setDetail(res.data)).catch((err)=> console.log(err))
    },[id])
  return (
    <div>{detail.image} </div>
  )
}

export default ProductDetail