import { useSelector, useDispatch } from 'react-redux'
import { Pagination } from '@mui/material';
import { selectorFilterRequest, selectorProductsQuantity } from "../../../../selectors";
import { actionFetchSearchFilterProducts } from '../../../../reducers';


import './Paginate.scss'
const Paginate = () => {
    const filterRequestObj = useSelector(selectorFilterRequest)
    const productsQuantity = useSelector(selectorProductsQuantity)
    const dispatch = useDispatch()

    const pageCount = Math.ceil(productsQuantity / filterRequestObj.perPage);
    let newfilterRequestObj = { ...filterRequestObj }

    const handleChange = (e, page) => {
        newfilterRequestObj.startPage =  page
        dispatch(actionFetchSearchFilterProducts(newfilterRequestObj))
    }


    return (
        <div className='pagination'>
            <Pagination
                size="medium"
                count={pageCount}
                onChange={handleChange}
                page={ newfilterRequestObj.startPage}>
                   
            </Pagination>
        </div>

    );
}

export default Paginate
