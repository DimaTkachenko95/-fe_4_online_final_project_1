import Items from "./Items";
import { Container } from "@mui/material";
import styles from './Slider.module.scss';

const Slider = () => {

return(
<>
<div className={styles.popularProducts}><span className={styles.popularProductsColored}>POPULAR</span> PRODUCTS</div>
  <Container maxWidth="lg">
    {<Items />}
  </Container>
</>
)
}

export default Slider;