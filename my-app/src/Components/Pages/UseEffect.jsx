import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UseEffect() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true);
        axios
        .get("https://dummyjson.com/products")
        .then(res =>{
            setProducts(res.data.products); 
            setLoading(false);
        })
        .catch(err=>console.log(err));

    },[]);
  return loading ?(
    <div>loading........</div>
  ):(
    <div>
        {products.map(element=>(
          <h1 key={element.id}>{element.title}</h1>  
        ))}



    </div>
  )
}

export default UseEffect