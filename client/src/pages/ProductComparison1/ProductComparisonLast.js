import { useDispatch, useSelector } from 'react-redux';
import {
  selectorScales,
  selectorAllProductsComp,
  selectorPageLoading,
  // selectorServerErrorProducts,
} from '../../selectors';
import { useEffect, useState } from 'react';
import './ProductComparisonLast.scss';
import { actionFetchAllProductsComp } from '../../reducers/products.reducer';
import { Container } from '@mui/material';
import BreadCrumbs from '../../components/BreadCrumbs';
import Preloader from '../../components/Preloader';
// import ServerError from '../../components/Notifications/ServerError';

const ProductComparisonSlice = () => {
  const dispatch = useDispatch();
  const allProd = useSelector(selectorAllProductsComp);
  const itemNoArr = useSelector(selectorScales);
  // const { serverError } = useSelector(selectorServerErrorProducts);
  const isLoading = useSelector(selectorPageLoading);
  const [comparisonProducts, setComparisonProducts] = useState([]);

  useEffect(() => {
    dispatch(actionFetchAllProductsComp());
  }, []);

  useEffect(() => {
    const tableProducts = allProd
      ?.filter((prod) => itemNoArr.includes(prod._id))
      .map((item) => {
        return { ...item, image: item.imageUrls[0] };
      });
    setComparisonProducts(tableProducts);
  }, [allProd]);

  return (
    <main>
      <Container className="comparison-container" maxWidth="lg">
        <BreadCrumbs linksArray={[{ link: '/comparison', text: 'Product comparison' }]} />
        <h2 className="comparison-container__wrapper-title">Compare {itemNoArr?.length}</h2>
        <h2 className="comparison-container__wrapper-title-quantity">products</h2>
        {/*{serverError && <ServerError />}*/}
        <div className="comparison-container__wrapper">
          <Preloader open={isLoading} />
          {comparisonProducts?.length > 0 && (
            <>
              <table className="comparison-container__table">
                <thead className="thead-default">
                  <tr>
                    <th />
                    {comparisonProducts.map((product) => (
                      <th key={product.imageUrls} style={{ width: '200px', height: '200px' }}>
                        <img style={{ width: '100%', height: '75%' }} src={product.imageUrls[0]} />
                      </th>
                    ))}
                  </tr>
                  <tr>
                    <th />
                    {comparisonProducts.map((product) => (
                      <th key={product.id}>{product.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="brand">
                    <th scope="row">Brand</th>
                    {comparisonProducts.map((product) => (
                      <td key={product.id}>{product.brand}</td>
                    ))}
                  </tr>
                  <tr className="category">
                    <th scope="row">Category</th>
                    {comparisonProducts.map((product) => (
                      <td key={product.id}>{product.category}</td>
                    ))}
                  </tr>
                  <tr className="currentPrice">
                    <th scope="row">Current Price</th>
                    {comparisonProducts.map((product) => (
                      <td key={product.id} className="text-center">
                        {product.currentPrice}
                      </td>
                    ))}
                  </tr>
                  <tr className="previousPrice">
                    <th scope="row">Previous Price</th>
                    {comparisonProducts.map((product) => (
                      <td key={product.id} className="previousPrice">
                        {product.previousPrice}
                      </td>
                    ))}
                  </tr>

                  <tr className="processorBrand">
                    <th scope="row">Processor brand</th>
                    {comparisonProducts.map((product) => (
                      <td key={product.id}>{product.processorBrand}</td>
                    ))}
                  </tr>
                  <tr className="processorType">
                    <th scope="row">Processor type</th>
                    {comparisonProducts.map((product) => (
                      <td key={product.id}>{product.processorType}</td>
                    ))}
                  </tr>
                  <tr className="screenSize">
                    <th scope="row">Screen size</th>
                    {comparisonProducts.map((product) => (
                      <td key={product.id}>{product.screenSize}</td>
                    ))}
                  </tr>
                  <tr className="videoCard">
                    <th scope="row">Video card</th>
                    {comparisonProducts.map((product) => (
                      <td key={product.id}>{product.videoCard}</td>
                    ))}
                  </tr>
                  <tr className="operatingSystem">
                    <th scope="row">OS</th>
                    {comparisonProducts.map((product) => (
                      <td key={product.id}>{product.operatingSystem}</td>
                    ))}
                  </tr>
                  <tr className="ramMemory">
                    <th scope="row">RAM</th>
                    {comparisonProducts.map((product) => (
                      <td key={product.id}>{product.ramMemory}</td>
                    ))}
                  </tr>
                  <tr className="hardDriveCapacity">
                    <th scope="row">HDC</th>
                    {comparisonProducts.map((product) => (
                      <td key={product.id}>{product.hardDriveCapacity}</td>
                    ))}
                  </tr>
                  <tr className="colors">
                    <th scope="row">Color</th>
                    {comparisonProducts.map((product) => (
                      <td key={product.id}>{product.color}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </>
          )}
        </div>
      </Container>
    </main>
  );
};

export default ProductComparisonSlice;
