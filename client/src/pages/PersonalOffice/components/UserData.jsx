import { TextField } from "@mui/material"
import {InputMask} from 'primereact/inputmask' 
import { useState } from 'react';
import { Formik, Form } from 'formik';
import {useDispatch, useSelector} from "react-redux";
import { selectorUserInfo } from "../../../selectors";
import { actionUserInfo } from "../../../reducers";
import FormRegistration from "../../../components/FormRegistration";
import cx from "classnames";



const UserData = () => {

     const userInfo = useSelector(selectorUserInfo)
     const dispatch = useDispatch()
     /*  const userDataArr = Object.entries(userData).map((el)=>{
        if(el[0] == 'telephone'){
            return    <InputMask value={el[1]} isSubmitting={true}    mask="+(999) 99 99 999" />
        } else{
            return <TextField isSubmitting={true}  fullWidth label={el[0]} defaultValue={el[1]} id="fullWidth" />
        }
       
      }) */
     let disabled = false
  
    return(
      <FormRegistration initialValues={userInfo} onSubmit={(values) => {
        console.log(values)
       
      }} sx= {[disabled && {
        "& fieldset": { border: 'none' },
      } ]} disabled={disabled} onClick={(e)=>console.log(e.target.name)}/>


     /*    <Formik   initialValues={userData}   
      >
             {({errors, touched, getFieldProps })=>(
          <Form   onSubmit={(values)=>{
            dispatch(actionUserInfo(values)) 
            console.log(values)}} >
            {userDataArr}
            <button type='submit'>aaa</button>
          </Form>
            )}
        </Formik> */
    
   
        
    )
}
export default UserData