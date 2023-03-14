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

    const handleChange = (e, page) => {
        let newfilterRequestObj = { ...filterRequestObj }
        newfilterRequestObj.startPage = page
        dispatch(actionFetchSearchFilterProducts(newfilterRequestObj))
    }


    return (
        <div className='pagination'>
            <Pagination
                size="medium"
                count={pageCount}
                onChange={handleChange}>
            </Pagination>
        </div>

    );
}

export default Paginate
