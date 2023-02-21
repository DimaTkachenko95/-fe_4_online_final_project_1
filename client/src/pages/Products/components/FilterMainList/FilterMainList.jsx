
import { TextField, FormControl, RadioGroup, FormLabel, FormControlLabel, Radio, FormGroup, Checkbox, Slider } from '@mui/material';
import { useState } from 'react';
import Box from '@mui/material/Box';
import FilterCheckBox from '../../../../components/FilterCheckBox';

import './FilterMainList.scss'

const FilterMainList = () => {
    const [price, setPrice] = useState([300, 1700]);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const handleChange = (e, data) => {
        
        if(data[0]>data[1]-500){
            return null
        }
        setPrice(data)
        setMinPrice(data[0])
        setMaxPrice(data[1]-500)
    };
  

    return (
        <section className='main-filter-block'>
            <FormGroup>
                <FormLabel class='header-filter'>Brend</FormLabel>
                <FilterCheckBox label={"Asus"} />
                <FilterCheckBox label={"Apple"} />
                <FilterCheckBox label={"HP"} />
                <FilterCheckBox label={"Acer"} />
                <FilterCheckBox label={"Lenovo"} />
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