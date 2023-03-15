
import {useDispatch, useSelector} from "react-redux";
import { selectorUserInfo, selectorEditInputs } from "../../../../selectors";
import FormRegistration from "../../../../components/FormRegistration";
import { actionFetchUserInfo, actionFetchUpdateCustomer } from "../../../../reducers";
import { useEffect } from "react";





 const UserData = () => {

     const userInfo = useSelector(selectorUserInfo)
     const inputsEditName = useSelector(selectorEditInputs)
     const dispatch = useDispatch()
    
   
     useEffect(()=>{
      dispatch(actionFetchUserInfo()) 
     },[])


    return(
      <>
      { userInfo && <FormRegistration 
              inputsEditName={inputsEditName} 
              initialValues={userInfo} 
              btnEdit={true}  
              withPassword={true}
              onSubmit={(values)=>{
                console.log(values)
                dispatch(actionFetchUpdateCustomer(values))}}/> } </>
    )
}
export default UserData 