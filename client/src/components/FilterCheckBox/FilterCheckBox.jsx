import { FormControlLabel, Checkbox } from '@mui/material';

const FilterCheckBox = ({ label, name, value, onClick}) => {
    return (
        <FormControlLabel control={<Checkbox color="success" onClick={onClick} />} label={label} name={name} value={value} />
    )
}

export default FilterCheckBox