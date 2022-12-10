import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {products} from "../../productsMock"
import {ItemDetail} from "../itemDetail/ItemDetail"

export const IntemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const {id} = useParams()

   useEffect(()=>{

        const productSelected = products.find(producto => producto.id === parseInt(id))
        setProduct(productSelected)

    },[id])

  return (
    <div>
        <ItemDetail product={product}/>
    </div>
  )
}
