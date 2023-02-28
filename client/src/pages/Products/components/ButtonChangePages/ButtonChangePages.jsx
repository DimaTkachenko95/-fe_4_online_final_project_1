
import { useSelector, useDispatch } from 'react-redux'
import { selectorRequestObjUser } from "../../../../selectors"
import { actionFetchSearchFilterProducts } from "../../../../reducers"

const ButtonChangePages = () => {
    const selectorObjUser = useSelector(selectorRequestObjUser)
    const dispatch = useDispatch()


    const nextPage = () => {
        let newObj = { ...selectorObjUser }
        newObj.startPage += 1
        dispatch(actionFetchSearchFilterProducts(newObj))
    }
    const previousPage = () => {
        let newObj = { ...selectorObjUser }
        if (newObj.startPage >= 2) {
            newObj.startPage -= 1
        }
        dispatch(actionFetchSearchFilterProducts(newObj))
    }
    return (
         <>
            <button onClick={() => previousPage()}>Previous page</button>
            <button onClick={() => nextPage()}>Next page</button>
        </> 
    )
} 

export default ButtonChangePages