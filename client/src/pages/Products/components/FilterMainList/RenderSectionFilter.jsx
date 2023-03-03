
import FilterCheckBox from "../../../../components/FilterCheckBox"

const RenderSectionFilter = ({arrFilters, blockNameFilters, checked, request}) => {
    const item = arrFilters.map((el)=>{
        return <FilterCheckBox keys={el} className="brand-block__item" defaultChecked={checked(blockNameFilters, el)} name={blockNameFilters} value={el} label={el} onClick={(e) => { request(blockNameFilters, el) }} />
    })
     return(
        <>
        {item}
        </>
        
     )
    
}

export default RenderSectionFilter