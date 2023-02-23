
import { TextField, FormControl, RadioGroup, FormLabel, FormControlLabel, Radio, FormGroup, Checkbox, Slider } from '@mui/material';
import { useState } from 'react';
import Box from '@mui/material/Box';
import FilterCheckBox from '../../../../components/FilterCheckBox';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react";
import { selectoRequestObj } from '../../../../selectors';
import { actionFetchAllProducts } from '../../../../reducers';

import './FilterMainList.scss'

const FilterMainList = () => {
    
    const [requestObj, setRequestObj] = useState({brand: ''})
    const [price, setPrice] = useState([300, 1700]);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const dispatch = useDispatch()
    const handleChange = (e, data) => {
        
        if(data[0]>data[1]-500){
            return null
        }
        setPrice(data)
        setMinPrice(data[0])
        setMaxPrice(data[1]-500)
    };

 

    const request = (key, name)=>{
        if(requestObj[key].includes(name)){
            console.log(requestObj[key])
            requestObj[key] =  requestObj[key].split(',').filter(item => item !== name).join(',');
            console.log( requestObj)
        }else{
             requestObj[key] += name + ","
            console.log( requestObj) 
        }
        
         dispatch(actionFetchAllProducts(requestObj)) 
    }
  

    return (
        <section className='main-filter-block'>
            <FormGroup>
                <FormLabel class='header-filter'>Brand</FormLabel>
                <FilterCheckBox name={'brand'} value={'Asus'} label={"Asus"} onClick={(e) => {request(e.target.name, e.target.value)}}  />
                <FilterCheckBox name={'brand'} value={'Apple'} label={"Apple"} onClick={(e) => {request(e.target.name, e.target.value)}} />
                <FilterCheckBox name={'brand'} value={'HP'} label={"HP"} onClick={(e) => {request(e.target.name, e.target.value)}} />
                <FilterCheckBox name={'brand'} value={'Acer'} label={"Acer"} onClick={(e) => {request(e.target.name, e.target.value)}} />
                <FilterCheckBox name={'brand'} value={'Lenovo'} label={"Lenovo"} onClick={(e) => {request(e.target.name, e.target.value)}} />
            </FormGroup>
            <FormGroup>
                <FormLabel class='header-filter'>Category</FormLabel>
                <FilterCheckBox className='option_filter' label={"Gaming Laptops"} />
                <FilterCheckBox label={"Business Laptops"} />
                <FilterCheckBox label={"Refurbished Laptops"} />
            </FormGroup>
           <div>
            <Box 
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                   
                }}
            >
                <TextField 
                    color="success"
                    height="20px"
                   /*  label={price[0]} */
                    maxRows="6"
                    size="small"
                    value={minPrice}
                    onChange={e => setMinPrice(e.target.value)}
                  

                
                />
                <span className='line'> </span>
                <TextField
                    color="success"
                   /*  label={price[1]-400}  */
                    maxRows="6"
                    size="small"
                    value={maxPrice}
                    onChange={e => setMaxPrice(e.target.value)}
                  

                />
            </Box>
            <Box sx={{
                marginTop: 1,
                marginBottom: 2,
            }}>
                <Slider
                    color="success"
                    value={price}
                    onChange={handleChange}
                    max={3700}
                    min={100}
                    disableSwap 
                />
            </Box>
            </div>
            <FormGroup>
                <FormLabel class='header-filter header-filter__name'>Procesor</FormLabel>
                <FilterCheckBox label={"Intel"} />
                <FilterCheckBox label={"AMD"} />
            </FormGroup>
            <FormGroup>
                <FormLabel class='header-filter header-filter__name'>Screen size</FormLabel>
                <FilterCheckBox label={"11.6\""} />
                <FilterCheckBox label={"13.3\""} />
                <FilterCheckBox label={"14.0\""} />
                <FilterCheckBox label={"15.6\""} />
                <FilterCheckBox label={"16\""} />
            </FormGroup>
            <div>SKDJCLKSJLDKC</div>
        </section>
    )
}

export default FilterMainList