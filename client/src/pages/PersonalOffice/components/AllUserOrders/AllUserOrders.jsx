import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { actionFetchAllUserOrders } from "../../../../reducers";
import { selectorAllUserOrders } from "../../../../selectors";
import ProductCard from "../../../../components/ProductCard";
import {Box, Container, TextField} from '@mui/material';
import ProductsSlider from "../../../../components/ProductsSlider";

import './AllUserOrder.scss'

const AllUserOrders = () => {
    const allUserOrders = useSelector(selectorAllUserOrders)
    console.log(allUserOrders,'compon')
    const dispatch = useDispatch() 

    useEffect(()=>{
        dispatch(actionFetchAllUserOrders())
    },[])

     const blockOrder = allUserOrders.map(({products})=>{
        const itemOrder = products.map(({product})=>{
            console.log(product, 'asasa')
             return product        

/* return  <ProductCard key={product.itemNo} el={product} isForOrderedPage={true}/>   */ 
        }) 
    console.log(itemOrder, 'qqqqqqqqq')
        return(
            <div>
                <p>{itemOrder.date}</p>
                <ProductsSlider key={products._id} products={itemOrder}  isForOrderedPage={true}/>     
            </div>
                      
   /*           <div  className="one-block-order">{itemOrder}</div>   */
        )
     
    }) 
    

    return(
        <>
        { blockOrder}
        </>
     
    )
}

export default AllUserOrders