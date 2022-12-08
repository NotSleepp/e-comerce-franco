import { useState, useEffect } from 'react';
import { products } from '../../productsMock'
import {Item} from '../item/Item'

export const ItemList = () => {

    const [items, setItems] = useState([]);

    useEffect(()=>{
        const tarea = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(products);
            },2000)
            })
        
            tarea
                .then((res)=>{setItems(res)})
                .catch((err)=>{console.log("error")})
    },[])
   
    console.log(items)

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

