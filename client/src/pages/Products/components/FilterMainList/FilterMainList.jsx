import { TextField, FormLabel, FormGroup, Slider } from '@mui/material';
import { useState } from 'react';
import Box from '@mui/material/Box';
import FilterCheckBox from '../../../../components/FilterCheckBox';

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
                <FilterCheckBox label={"Intel"} />
                <FilterCheckBox label={"AMD"} />
            </FormGroup>
            <FormGroup>
                <FormLabel class='header-filter header-filter__name'>Screen size</FormLabel>
                <FilterCheckBox label={"11.6&#34;"} />
                <FilterCheckBox label={"13.3&#34;"} />
                <FilterCheckBox label={"14.0&#34;"} />
                <FilterCheckBox label={"15.6&#34;"} />
                <FilterCheckBox label={"16&#34;"} />
            </FormGroup>
            <div>SKDJCLKSJLDKC</div>
        </section>
    )
}

export default FilterMainList
