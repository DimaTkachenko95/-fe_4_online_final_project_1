import axios from "axios"
export const sendRequest = async (url) =>{
    const response = await fetch(url);
    const result = await response.json();
    return result;
}

export const sendRequest2 =  (url)=>{
   return axios
    .get(`http://localhost:5000/api/products/filter?${url}`)
}

