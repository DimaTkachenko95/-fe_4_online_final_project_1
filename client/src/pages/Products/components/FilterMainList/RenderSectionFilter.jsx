import FilterCheckBox from "../../../../components/FilterCheckBox"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState,  useCallback} from 'react';
import { actionFetchSearchFilterProducts } from "../../../../reducers";
import { selectorFilterRequest, selectorPageLoading, selectorFirstVisitToCorectFilter } from '../../../../selectors';





const RenderSectionFilter = ({arrFilters, blockNameFilters, checked, request}) => {
    const dispatch = useDispatch()
    const filterRequestObj = useSelector(selectorFilterRequest)
    
    
    useEffect(()=>{
        sessionStorage.removeItem('filterRequest')
        dispatch(actionFetchSearchFilterProducts(filterRequestObj))
    },[ filterRequestObj])


    const item = arrFilters.map((el)=>{
        return  <FilterCheckBox key={el}
                              className="brand-block__item"
                              defaultChecked={checked(blockNameFilters, el)}
                              name={blockNameFilters}
                              value={el}
                              label={el}
                              onClick={() => { request(blockNameFilters, el) }} />
    })
     return(
        <>
       { item }
        </>

     )

}

export default RenderSectionFilter
