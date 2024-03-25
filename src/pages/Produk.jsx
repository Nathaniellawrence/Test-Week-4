import React,{useState, useEffect} from 'react'
import axios from 'axios'
import '../App.css'

const Produk = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect (() => {
    axios({
      method:"GET",
      url:"https://fakestoreapi.com/products"
    }).then(res => {
      console.log(res.data)
      setData(res.data)
    }).catch(e => console.log(e))
    .finally(() => setLoading(false));

  },[])
  
  return (
    <div className="products-container">
      {loading && (
      <div>
        {" "}
        <h1>Loading...</h1>
      </div>
      )}  

      {data.map((product) => (
        <div key={product.id} className='card'>
          <div><img src={product.image} alt='#' /></div>
          <div className='card-description'></div>
          <h6>{product.title}</h6>
          <h6>{`Price: ${product.price}`}</h6>
          <h6>{`Category: ${product.category}`}</h6>
        </div>
      ))}
    </div>
  )
}

export default Produk