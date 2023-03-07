import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    userData: {
        firstName: '11111',
        lastName: 'bbbb',
        login: 'cccc',
        email: 'eeee',
        password: 'dddd',
        telephone: '+3458350834503453',
        gender: 'jjjjj',
        avatarUrl: 'kkkkk', 
    }
}


    const personalOfficeSlice = createSlice({
        name: "personalOfficeSlice",
        initialState,
        reducers: {
            actionUserData: (state, {payload}) => {
                console.log('aaa', payload)
                state.userData = {...payload}
            }
        }
    })

export const {actionUserData} = personalOfficeSlice.actions

 export default personalOfficeSlice.reducer 