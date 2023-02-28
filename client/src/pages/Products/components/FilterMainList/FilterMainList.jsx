import { TextField, FormLabel, FormGroup, Slider, FormControl, Select, MenuItem, InputLabel, NativeSelect } from '@mui/material';
import { useState } from 'react';
import cx from "classnames";
import Box from '@mui/material/Box';
import FilterCheckBox from '../../../../components/FilterCheckBox';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef } from "react";
import { selectorRequestObjUser, selectorShowMoreFilters } from '../../../../selectors';
import { actionFetchSearchFilterProducts, actionShowMoreFilters } from '../../../../reducers';

import './FilterMainList.scss'



const FilterMainList = () => {
    const selectorObjUser = useSelector(selectorRequestObjUser)
    const showMoreFilters = useSelector(selectorShowMoreFilters)
    const [minimalInputPrice, setMinimalInputPrice] = useState('')
    const [maximalInputPrice, setMaximalInputPrice] = useState('')
    const [sortByPrice, setSortByPrice] = useState('')
    const [price, setPrice] = useState([300, 1700]);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const dispatch = useDispatch()
    console.log()
    const handleChange = (e, data) => {
        if (data[0] > data[1] - 500) {
            return null
        }
        setPrice(data)  
        setMinPrice(data[0])
        setMaxPrice(data[1] - 500) 
        setMinimalInputPrice(data[0])
        setMaximalInputPrice(data[1]-500)
    };



 /*    useEffect(() => {
        let obj = JSON.parse(localStorage.getItem("requestObjUser"))
        console.log(obj, 'sttssttststst')
        if (obj) {
            dispatch(actionFetchSearchFilterProducts(obj))
        }
    }, []) */



    const request = (key, name) => {
        let newObj = { ...selectorObjUser }
         newObj.startPage = 1 
        newObj[key].includes(name) ?
            newObj[key] = newObj[key].split(',').filter(item => item !== name).join(',')
            :
            newObj[key] += name + ","
        dispatch(actionFetchSearchFilterProducts(newObj))
    }

    const filterWithCurentPrice = (e) => {
        let newObj = { ...selectorObjUser }
        newObj.minPrice = minimalInputPrice
        newObj.maxPrice = maximalInputPrice
        if(e) {
            newObj.sort = e
        }
        
        dispatch(actionFetchSearchFilterProducts(newObj))
    }

    const comparePrice = () =>{
        if(minimalInputPrice>maximalInputPrice){
            return false
        }
        if(minimalInputPrice<=0 || maximalInputPrice<=0){
            return false
        }
        if( !!isNaN(+minimalInputPrice) || !!isNaN(+maximalInputPrice) ){
            return false
        }
        return true
    }

    const checked = (key, name) => {
        console.log(key, name, '111111111111111111')
        if (selectorObjUser[key].includes(name)) {
            console.log('aaaaaaaa')
            return true
        } else {
            console.log('bbbb')
            return false
        }
    }


    return (
        <>
            <section className='main-filter-block'>
                <FormControl> 
                    <InputLabel color="success" id="demo-simple-select-label">Sort by price</InputLabel>
                    <Select name={'sort'} color="success" sx={{
                        width: 140
                    }} onChange={(e) => {
                        setSortByPrice(e.target.value) 
                        filterWithCurentPrice(e.target.value)
                        console.log(e.target.name, e.target.value) 
                    }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Sort by price"
                    >
                        <MenuItem name={'sort'} value={'Doesnt matter'} >Doesn't matter</MenuItem>
                        <MenuItem name={'sort'} value={"currentPrice"}>Cheap first</MenuItem>
                        <MenuItem name={'sort'} value={"-currentPrice"}>Expensive first</MenuItem>
                    </Select>
                </FormControl>
                <FormGroup>
                    <FormLabel class='header-filter'>Brand</FormLabel>
                    <FilterCheckBox className="brand-block__item"  name={'brand'} value={'Asus'} label={'Asus'} onClick={(e) => { request(e.target.name, e.target.value) }} />
                    <FilterCheckBox className="brand-block__item"  defaultChecked={(e)=>checked(e.target.name, e.target.value)}  name={'brand'} value={'Apple'} label={'Apple'} onClick={(e) => { request(e.target.name, e.target.value) }} />
                    <FilterCheckBox className="brand-block__item" name={'brand'} value={'HP'} label={'HP'} onClick={(e) => { request(e.target.name, e.target.value) }} />
                    <FilterCheckBox className="brand-block__item" name={'brand'} value={'Acer'} label={'Acer'} onClick={(e) => { request(e.target.name, e.target.value) }} />
                    <FilterCheckBox className="brand-block__item" name={'brand'} value={'Lenovo'} label={'Lenovo'} onClick={(e) => { request(e.target.name, e.target.value) }} />
                </FormGroup>
                <FormGroup>
                    <FormLabel class='header-filter'>Category</FormLabel>
                    <FilterCheckBox className='option_filter' name={'category'} value={'Gaming'} label={'Gaming'} onClick={(e) => { request(e.target.name, e.target.value) }} />
                    <FilterCheckBox name={'category'} value={'Business'} label={'Business'} onClick={(e) => { request(e.target.name, e.target.value) }} />
                    <FilterCheckBox name={'category'} value={'Refurbished'} label={'Refurbished'} onClick={(e) => { request(e.target.name, e.target.value) }} />
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
                            maxRows="6"
                            size="small"
                            value={minimalInputPrice}
                            onChange={(e) =>setMinimalInputPrice(e.target.value)}
                        />
                        <span className='line'> </span>
                        <TextField
                            color="success"
                            maxRows="6"
                            size="small"
                            value={maximalInputPrice}
                            onChange={(e)=>setMaximalInputPrice(e.target.value)}
                        />

                    </Box>
                    <Box>
                        <Slider color="success"
                            value={price}
                            onChange={handleChange}
                            max={3700}
                            min={100}
                            disableSwap
                        />
                    </Box>
                    <button disabled={!comparePrice()} 
                    className={cx("btn-send-request", { "btn-send-request-disabled": !comparePrice() })} 
                    onClick={()=>filterWithCurentPrice()}>OK
                    </button>
                </div>
                <FormGroup>
                    <FormLabel class='header-filter header-filter__name'>Procesor</FormLabel>
                    <FilterCheckBox name={'processorBrand'} value={'Intel'} label={'Intel'} onClick={(e) => { request(e.target.name, e.target.value) }} />
                    <FilterCheckBox name={'processorBrand'} value={'AMD'} label={'AMD'} onClick={(e) => { request(e.target.name, e.target.value) }} />
                </FormGroup>


                {showMoreFilters ?
                    <>
                        <button onClick={() => dispatch(actionShowMoreFilters(false))}>Hide filters</button>
                        <FormGroup>
                            <FormLabel class='header-filter header-filter__name'>Screen size</FormLabel>
                            <FilterCheckBox name={'screenSize'} value={'16'} label={'16\"'} onClick={(e) => { request(e.target.name, e.target.value) }} />
                            <FilterCheckBox name={'screenSize'} value={'15.6'} label={'15.6\"'} onClick={(e) => { request(e.target.name, e.target.value) }} />
                            <FilterCheckBox name={'screenSize'} value={'14'} label={'14\"'} onClick={(e) => { request(e.target.name, e.target.value) }} />
                            <FilterCheckBox name={'screenSize'} value={'13.3'} label={'13.3\"'} onClick={(e) => { request(e.target.name, e.target.value) }} />
                            <FilterCheckBox name={'screenSize'} value={'11.6'} label={'11.6\"'} onClick={(e) => { request(e.target.name, e.target.value) }} />
                        </FormGroup>

                        <FormGroup>
                            <FormLabel class='header-filter header-filter__name'>Color</FormLabel>
                            <FilterCheckBox name={'color'} value={'black'} label={'black'} onClick={(e) => { request(e.target.name, e.target.value) }} />
                            <FilterCheckBox name={'color'} value={'silver'} label={'silver'} onClick={(e) => { request(e.target.name, e.target.value) }} />
                            <FilterCheckBox name={'color'} value={'white'} label={'white'} onClick={(e) => { request(e.target.name, e.target.value) }} />
                        </FormGroup>

                        <FormGroup>
                            <FormLabel class='header-filter header-filter__name'>Ram memory</FormLabel>
                            <FilterCheckBox name={'ramMemory'} value={'32 GB'} label={'32 GB'} onClick={(e) => { request(e.target.name, e.target.value) }} />
                            <FilterCheckBox name={'ramMemory'} value={'16 GB'} label={'16 GB'} onClick={(e) => { request(e.target.name, e.target.value) }} />
                            <FilterCheckBox name={'ramMemory'} value={'8 GB'} label={'8 GB'} onClick={(e) => { request(e.target.name, e.target.value) }} />
                            <FilterCheckBox name={'ramMemory'} value={'4 GB'} label={'4 GB'} onClick={(e) => { request(e.target.name, e.target.value) }} />
                        </FormGroup>

                        <FormGroup>
                            <FormLabel class='header-filter header-filter__name'>Hard drive</FormLabel>
                            <FilterCheckBox name={'hardDriveCapacity'} value={'1 TB'} label={'1 TB'} onClick={(e) => { request(e.target.name, e.target.value) }} />
                            <FilterCheckBox name={'hardDriveCapacity'} value={'512 GB'} label={'512 GB'} onClick={(e) => { request(e.target.name, e.target.value) }} />
                            <FilterCheckBox name={'hardDriveCapacity'} value={'256 GB'} label={'256 GB'} onClick={(e) => { request(e.target.name, e.target.value) }} />
                            <FilterCheckBox name={'hardDriveCapacity'} value={'128 GB'} label={'128 GB'} onClick={(e) => { request(e.target.name, e.target.value) }} />
                            <FilterCheckBox name={'hardDriveCapacity'} value={'64 GB'} label={'64 GB'} onClick={(e) => { request(e.target.name, e.target.value) }} />
                        </FormGroup>
                    </>
                    :
                    <button onClick={() => dispatch(actionShowMoreFilters(true))}>Show more filters</button>
                }




            </section>
        </>
    )
}

export default FilterMainList
