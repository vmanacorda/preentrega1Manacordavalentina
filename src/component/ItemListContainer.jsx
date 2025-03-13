import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Item from "./Item"; 




const ItemListContainer = () => {


  const [resultado, setResultado] = useState([])
  const params = useParams()

  useEffect(() => {
      fetch(params.id === undefined ? '/productos.json' : `/${params.id}.json`)
          .then((res) => {
              return res.json()
          })
          .then((res) => {
              setResultado(res)
          });
  }, [params.id])


  useEffect(() => {
    fetch('https://dummyjson.com/products')  
      .then((res) => res.json())
      .then((res) => {
        setResultado(res.products);  
        console.log(res);  
      })
      .catch((err) => {
        console.error("Hubo un error:", err); 
      });
  }, []);  

  return (
    <div className="fluid-grid">
        {resultado.map((producto) => {
            return (
                <Item
                    key={producto.id}
                    producto={producto}
                />
            )
        })}
    </div>
)
}
export default ItemListContainer

