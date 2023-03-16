import './Main.scss';
import Hero from "./components/Hero";
import SearchBlock from "./components/SearchBlock";
import DiscountedProductsSlider from '../../components/DiscountedProductsSlider';
import Categories from '../../components/Categories';

const Main = () => (
  <main>
    <Hero />
    <DiscountedProductsSlider />
    <Categories />
    <SearchBlock />
  </main>
)

export default Main;
