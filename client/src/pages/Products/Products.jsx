import "./Products.scss";

import Items from "./Items";
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import {useSelector} from "react-redux";
import { FormControl, RadioGroup, FormLabel,  FormControlLabel, Radio } from '@mui/material';
import {ReactComponent as Bottom} from "./icons/bottom.svg"
import {ReactComponent as Top} from "./icons/top.svg"
import {selectorAllProducts, selectorSearchProducts} from "../../selectors";



const Products = () => {
    const allProducts = useSelector(selectorAllProducts);
    const searchProducts = useSelector(selectorSearchProducts);

    return (
        <main>
        <Container className="main-list" maxWidth="lg">
            <h5 className="count-found-product">
                Products <span className="count-found-product__span">found</span>
            </h5>
            <div className="main-filter-block">
                <div className="main-filter-block__popular">
                    <button className="main-filter-block__popular--btn">By price</button>
                    <button className="main-filter-block__popular--btn">By popular</button>
                </div>

                <div className="main-filter-block__direction">
                    <button className="main-filter-block__direction--btn"><Bottom/></button>
                    <button className="main-filter-block__direction--btn"><Top/></button>
                </div>
            </div>
            
            <Grid   container spacing={4}>
                {<Items />}
            </Grid>
        </Container>
    </main >
    );
}

export default Products;
