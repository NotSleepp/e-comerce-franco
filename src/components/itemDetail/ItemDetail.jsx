import React from 'react'

export const ItemDetail = ({product}) => {
  return (
    <div>
    <h2>{product.title}</h2>
    <img src={product.thumbnail} alt="imagen juego" />
    <h3>Plataforma: {product.platform}</h3>
    <h4>{product.short_description}</h4>
    <p>desarrollado por: {product.developer}</p>
    </div>
  )
}
