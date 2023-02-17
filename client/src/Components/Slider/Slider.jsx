import Items from "./Items";
// import { Box } from "@mui/system";
import { Container } from "@mui/material";
import typographyClasses from "@mui/material";

const Slider = () => {

return(
<>
<typographyClasses>POPULAR PRODUCTS</typographyClasses>
  <Container maxWidth="lg">
    {<Items />}
  </Container>
</>
)
}

export default Slider;