import { Container } from '@mui/material';
import BreadCrumbs from '../../components/BreadCrumbs';
import CompareChart from 'react-comparison-table';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectorScales,
  selectorAllProducts,
  selectorServerErrorProducts,
  selectorPageLoading,
  selectorAllProductsComp,
} from '../../selectors';
import { useEffect, useState } from 'react';
import './ProductComparison.scss';
import { actionFetchAllProducts } from '../../reducers';
import Preloader from '../../components/Preloader';
import ServerError from '../../components/Notifications/ServerError';
import { actionAllProductsComp, actionFetchAllProductsComp } from '../../reducers/products.reducer';
import axios from 'axios';
import { GET_ALL_PRODUCTS } from '../../endpoints';

const ProductComparisonSlice = () => {
  const dispatch = useDispatch();
  const allProd = useSelector(selectorAllProductsComp);
  const itemNoArr = useSelector(selectorScales);
  const serverError = useSelector(selectorServerErrorProducts);
  const isLoading = useSelector(selectorPageLoading);
  const [comparisonProducts, setComparisonProducts] = useState([]);
  //const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    dispatch(actionFetchAllProductsComp());
    // axios.get(GET_ALL_PRODUCTS).then(({ data }) => {
    //   console.log(data);
    //   setAllProducts(data);
    // });
  }, []);

  useEffect(() => {
    const tableProducts = allProd
      ?.filter((prod) => itemNoArr.includes(prod._id))
      .map((item) => {
        return { ...item, image: item.imageUrls[0], Name: item.name };
      });

    setComparisonProducts(tableProducts);
  }, [allProd]);

  return (
    <main>
      <Container className="comparison-container" maxWidth="lg">
        <BreadCrumbs linksArray={[{ link: '/comparison', text: 'Product comparison' }]} />
        <h2 className="comparison-container__wrapper-title">Compare {itemNoArr?.length}</h2>
        <h2 className="comparison-container__wrapper-title-quantity">products</h2>
        {serverError && <ServerError />}
        <div className="comparison-container__wrapper">
          <Preloader open={isLoading} />
          {comparisonProducts?.length > 0 && (
            <CompareChart
              data={comparisonProducts}
              features={[
                'brand',
                'category',
                'currentPrice',
                'previousPrice',
                'processorBrand',
                'processorType',
                'screenSize',
                'videoCard',
                'operatingSystem',
                'ramMemory',
                'hardDriveCapacity',
                'color',
                'description',
              ]}
              hideItemOption={true}
            />
          )}
        </div>
      </Container>
    </main>
  );
};

export default ProductComparisonSlice;
