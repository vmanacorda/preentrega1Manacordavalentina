import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { miContexto } from "./CustomContext"

const ProductDetailContainer = () => {

    const params = useParams()
    const [item, setItem] = useState({})
    const elValorDelContexto = useContext(miContexto)

      useEffect(() => {
          fetch('/productos.json')
              .then((res) => {
                  return res.json()
              })
              .then((res) => {
                console.log(res)
                const item = res.find((item) => item.id.toString() === params.id)
                setItem(item)
              });
      }, [params.id])

    const handleClick = () => {
        elValorDelContexto.setCantidadProductos(elValorDelContexto.cantProd + 1)
    }

    return (
        <div className="flex-grow">
            <h3 className="product-card__title">{item.title}</h3>
            <h3 className="product-card__description">{item.description}</h3>
            <p className="product-card__description">${item.price}</p>
            <img src={item.thumbnail} alt={item.title} className="product-card__img" />
            <button onClick={handleClick}>Agregar al carrito</button>
        </div>
    )
}

export default ProductDetailContainer