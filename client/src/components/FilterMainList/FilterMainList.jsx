
import { TextField, FormControl, RadioGroup, FormLabel, FormControlLabel, Radio, FormGroup, Checkbox, Slider } from '@mui/material';
import { useState } from 'react';
import Box from '@mui/material/Box';


import './FilterMainList.scss'
const FilterMainList = () => {

    const [price, setPrice] = useState([300, 700]);

    const handleChange = (e, data) => {
        console.log(data)
        setPrice(data)
    };


    return (
        <section className='main-filter-block'>
            <FormGroup>
                <FormLabel class='header-filter'>Producer</FormLabel>
                <FormControlLabel control={<Checkbox color="success" />} label="Asus" />
                <FormControlLabel control={<Checkbox color="success" />} label="Apple" />
                <FormControlLabel control={<Checkbox color="success" />} label="HP" />
                <FormControlLabel control={<Checkbox color="success" />} label="Acer" />
                <FormControlLabel control={<Checkbox color="success" />} label="Lenovo" />
            </FormGroup>
            <FormGroup>
                <FormLabel class='header-filter'>Category</FormLabel>
                <FormControlLabel className='option_filter' control={<Checkbox color="success" />} label="Gaming Laptops" />
                <FormControlLabel control={<Checkbox color="success" />} label="Business Laptops" />
                <FormControlLabel control={<Checkbox color="success" />} label="Refurbished Laptops" />
            </FormGroup>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    '& > :not(style)': { m: 0 },
                }}
            >
                <TextField
                    color="success"
                    height="200px"
                    id="demo-helper-text-aligned"
                    label={price[0]}
                  
                    /* onChange={() =>} */
                />
                <div> </div>
                <TextField
                    color="success"
                    id="demo-helper-text-aligned-no-helper"
                    label={price[1]}
                    value={price[1]}
                />
            </Box>


            <Box sx={{}}>
                <Slider color="success"
                    value={price}
                    onChange={handleChange}
                    max={5000}
                    min={100}
                    disableSwap
                />
            </Box>
            <FormGroup>
                <FormLabel class='header-filter header-filter__name'>Procesor</FormLabel>
                <FormControlLabel control={<Checkbox color="success" />} label="Intel" />
                <FormControlLabel control={<Checkbox color="success" />} label="AMD" />
            </FormGroup>
            <FormGroup>
                <FormLabel class='header-filter header-filter__name'>Screen size</FormLabel>
                <FormControlLabel control={<Checkbox color="success" />} label="11.6&#34;" />
                <FormControlLabel control={<Checkbox color="success" />} label="13.3&#34;" />
                <FormControlLabel control={<Checkbox color="success" />} label="14.0&#34;" />
                <FormControlLabel control={<Checkbox color="success" />} label="15.6&#34;" />
                <FormControlLabel control={<Checkbox color="success" />} label="16&#34;" />
            </FormGroup>
            <div>SKDJCLKSJLDKC</div>
        </section>
    )
}

export default FilterMainList