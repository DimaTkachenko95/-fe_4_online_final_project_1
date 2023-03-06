import FilterMainList from './components/FilterMainList';
import { Container } from '@mui/material';
import {
  selectorAllProducts,
  selectorSearchInputValue,
  selectorServerErrorProducts,
  selectorProductsQuantity,
  selectorPageLoading,
} from '../../selectors';
import {
  actionFetchAllProducts,
  actionFetchSearchFilterProducts,
  actionFetchSearchProducts,
} from '../../reducers';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../../components/ProductCard';
import BreadCrumbs from '../../components/BreadCrumbs';
import ServerError from '../../components/Notifications/ServerError';
import Paginate from './components/Paginate';

import './Products.scss';
import Preloader from '../../components/Preloader';

const Products = () => {
  const allProducts = useSelector(selectorAllProducts);
  const productsQuantity = useSelector(selectorProductsQuantity);
  const searchInputValue = useSelector(selectorSearchInputValue);
  const serverError = useSelector(selectorServerErrorProducts);
  const pageLoading = useSelector(selectorPageLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    if (searchInputValue === '') {
      let obj = JSON.parse(sessionStorage.getItem('filterRequest'));
      if (obj) {
        dispatch(actionFetchSearchFilterProducts(obj));
      } else {
        dispatch(actionFetchAllProducts());
      }
    } else {
      dispatch(actionFetchSearchProducts(searchInputValue));
    }
  }, []);

  return (
    <main>
      <Container className="main-list" maxWidth="lg">
        <Preloader open={pageLoading} />
        {serverError && <ServerError />}
        {!serverError && (
          <>
            <BreadCrumbs linksArray={[{ link: '/products', text: 'Products' }]} />
            <div>
              <p className="count-found-product">
                Products <span className="count-found-product__span">{productsQuantity} found</span>
              </p>
            </div>
            <section className="main-list__sections">
              <div className="main-list__sections--products">
                {allProducts.length > 0 && !serverError ? (
                  <>
                    <div className="grid-main-list">
                      {allProducts?.map((el, index) => (
                        <ProductCard el={el} index={index} />
                      ))}
                    </div>
                    <Paginate />
                  </>
                ) : (
                  <p className="text-product__not-found">
                    Nothing to find, please enter correct name or change your filter
                  </p>
                )}
              </div>
              <div className="main-list__sections--filters">
                <FilterMainList />
              </div>
            </section>
          </>
        )}
      </Container>
    </main>
  );
};
export default Products;
