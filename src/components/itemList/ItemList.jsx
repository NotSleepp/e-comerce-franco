import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../productsMock'
import {Item} from '../item/Item'

export const ItemList = () => {
    const {categoryName} = useParams()
    const [items, setItems] = useState([]);

    useEffect(()=>{
        const productFiltered = products.filter(productos=>productos.genre === categoryName)
        const tarea = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(categoryName ? productFiltered : products);
            },2000)
            })
        
            tarea
                .then((res)=>{setItems(res)})
                .catch((err)=>{console.log("error")})
    },[categoryName])
   

    return (
        <div>

            {items.map((element)=>{
                return (
                <Item key={element.id} element={element}/>
                )
                
            })}

        </div>
    )
}

