import { FormControlLabel, Checkbox } from '@mui/material';

const FilterCheckBox = ({ label }) => {
    return (
        <FormControlLabel control={<Checkbox color="success" />} label={label} />
    )
}

export default FilterCheckBox