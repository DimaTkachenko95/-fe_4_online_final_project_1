import { TextField } from "@mui/material"
import {InputMask} from 'primereact/inputmask' 
import { useState } from 'react';
import { Formik, Form } from 'formik';
import {useDispatch, useSelector} from "react-redux";
import { selectorUserData } from "../../../selectors";
import { actionUserData } from "../../../reducers";



const UserData = () => {

     const userData = useSelector(selectorUserData)
     const dispatch = useDispatch()
      const userDataArr = Object.entries(userData).map((el)=>{
        if(el[0] == 'telephone'){
            return    <InputMask value={el[1]} isSubmitting={true}    mask="+(999) 99 99 999" />
        } else{
            return <TextField isSubmitting={true}  fullWidth label={el[0]} defaultValue={el[1]} id="fullWidth" />
        }
       
      })
     
  
    return(
        <Formik  /* initialValues={userData}   */
      >
             {({errors, touched, getFieldProps })=>(
          <Form   onSubmit={(values)=>{
            dispatch(actionUserData(values))
            console.log(values)}} >
            {userDataArr}
            <button type='submit'>aaa</button>
          </Form>
            )}
        </Formik>
    
   
        
    )
}
export default UserData