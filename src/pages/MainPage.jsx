import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Loading from '../components/Loading';
import Card from '../components/Card'; 
import { ProductContext } from '../context/productContext';

const MainPage = () => {
  // contexct yapsına abone olma
  // context yapsında value olarak belirlenen verilere erişim sağlarız

  const{products} = useContext(ProductContext);
    
  return (
    <div className='container d-flex flex-wrap justify-content-center justify-content-md-between gap-3 gap-md-4'>
    {!products && <Loading/>}
    
      {products?.map((product)=>(
        <Card product={product} key={product.id}/>
      ))}
    </div>
  )
}

export default MainPage
