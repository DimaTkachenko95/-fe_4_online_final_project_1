import './Main.scss';
import Hero from "./components/Hero";
import SearchBlock from "./components/SearchBlock";
import ProductsSlider from '../../components/ProductsSlider';
const Main = () => (
  <main>
      <Hero />    
      <ProductsSlider />
      <SearchBlock/>

  </main>
);

export default Main;
