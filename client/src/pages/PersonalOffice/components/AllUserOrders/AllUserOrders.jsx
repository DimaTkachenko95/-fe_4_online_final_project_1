import {useDispatch, useSelector} from "react-redux";
import { useEffect, useState } from "react";
import { actionFetchAllUserOrders } from "../../../../reducers";
import { selectorAllUserOrders } from "../../../../selectors";

import ProductsSlider from "../../../../components/ProductsSlider";
import { actionFetchCancelOrder, actionFetchGetOneOrder, actionFetchUpdatedOrder } from "../../../../reducers";
import FormOrder from "../../../../components/FormOrder";
import { selectorEditInputsOrder, selectorOrderInfo } from "../../../../selectors";

import './AllUserOrder.scss'
import { values } from "lodash";

const AllUserOrders = () => {
    const [update, setUpdate] = useState(false)
    const [openOrderInfo, setOpenOrderInfo] = useState([])
    const allUserOrders = useSelector(selectorAllUserOrders) 
    const orderInfo = useSelector(selectorOrderInfo) 
    const dispatch = useDispatch() 

    const editInputsOrder = useSelector(selectorEditInputsOrder)

    useEffect(()=>{
        dispatch(actionFetchAllUserOrders())
    },[update])

    

     const blockOrder = allUserOrders.map(({products, totalSum, orderNo, date, _id})=>{
        const itemOrder = products.map(({product})=>{      
             return product   
        }) 
        return(
            <div className="order-block">
                <ProductsSlider key={products._id} products={itemOrder}  isForOrderedPage={true}/>
                <p className="order-info">Order date: &nbsp;  <span className="order-info-description">{date.slice(0,10)}</span></p>
                <p className="order-info">Total sum: &nbsp;  <span className="order-info-description">{totalSum} $</span></p> 
                <p className="order-info">Order number:  &nbsp; <span className="order-info-description">{orderNo}</span></p> 
                <button onClick={()=>{
                    dispatch(actionFetchCancelOrder(_id))
                    setUpdate(!update)
                    }}>Cancel the order</button> 
                <button onClick={()=>{
                    

             if(openOrderInfo.includes(orderNo)){
                    setOpenOrderInfo(openOrderInfo.filter((el)=> el !== orderNo))
                   
                     } else {
                         dispatch(actionFetchGetOneOrder(orderNo)) 
                        setOpenOrderInfo([...openOrderInfo, orderNo])
                     }
        
               
                  
                   
                    
                    
                    }}>Update order</button>  
                    {openOrderInfo.includes(orderNo) &&  <FormOrder 
                                                                inputsEditName={editInputsOrder}  
                                                                initialValues={orderInfo}  
                                                                btnEdit={true}
                                                                onSubmit={(values)=>{
                                                              /*       console.log(values)
                                                                    console.log(_id) */
                                                                    dispatch(actionFetchUpdatedOrder())
                                                                }}/> }
               
                
            </div>
                      
   
        )
     
    }) 
  
    

    return(
        <>
        { blockOrder}
        </>
     
    )
}

export default AllUserOrders