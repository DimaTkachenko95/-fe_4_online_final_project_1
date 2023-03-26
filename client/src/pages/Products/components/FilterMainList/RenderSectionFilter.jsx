import FilterCheckBox from "../../../../components/FilterCheckBox"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState,  useCallback} from 'react';
import { actionFetchSearchFilterProducts } from "../../../../reducers";
import { selectorFilterRequest, selectorPageLoading, selectorFirstVisitAndResetToCorectFilter } from '../../../../selectors';





const RenderSectionFilter = ({arrFilters, blockNameFilters, checked, request}) => {
    const dispatch = useDispatch()
    const filterRequestObj = useSelector(selectorFilterRequest)
    const pageLoading = useSelector(selectorPageLoading)
    const firstVisitAndResetToCorectFilter = useSelector(selectorFirstVisitAndResetToCorectFilter)
    
    



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
{  firstVisitAndResetToCorectFilter && item }
        </>

     )

}

export default RenderSectionFilter
