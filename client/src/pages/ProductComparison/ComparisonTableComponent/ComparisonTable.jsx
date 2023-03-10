import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectorScales, selectorAllProductsComp, selectorPageLoading } from '../../../selectors';
import './ComparisonTable.scss';
import { actionFetchAllProductsComp, delFromComparisonTable } from '../../../reducers';
import Preloader from '../../../components/Preloader';

const ComparisonTable = () => {
  const dispatch = useDispatch();
  const allProd = useSelector(selectorAllProductsComp);
  const itemNoArr = useSelector(selectorScales);
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

  const delFromTable = (id) => {
    dispatch(delFromComparisonTable(id));
  };

  return (
    <div className="comparison-container__wrapper">
      <Preloader open={isLoading} />
      {comparisonProducts?.length > 0 && (
        <table className="comparison-table">
          <thead>
            <tr>
              <th />
              {comparisonProducts.map((product) => (
                <th key={product.imageUrls} style={{ width: '200px', height: '200px' }}>
                  <svg
                    onClick={() => delFromTable(product._id)}
                    className="comparison-table__delete"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_73_193)">
                      <path
                        d="M1.20093 10.8L6.00093 5.99998L10.8009 1.19998"
                        stroke="#C9C9C9"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      />
                      <path
                        d="M1.20093 1.19998L6.00093 5.99998L10.8009 10.8"
                        stroke="#C9C9C9"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_73_193">
                        <rect width="12" height="12" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <img
                    style={{ width: '100%', height: '75%' }}
                    src={product.imageUrls[0]}
                    alt="laptop"
                  />
                </th>
              ))}
            </tr>

            <tr className="comparison-table__product-name">
              <th />
              {comparisonProducts.map((product) => (
                <th key={product.id}>{product.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="comparison-table__product-brand">
              <th scope="row">Brand</th>
              {comparisonProducts.map((product) => (
                <td key={product.id}>{product.brand}</td>
              ))}
            </tr>
            <tr className="comparison-table__product-category">
              <th scope="row">Category</th>
              {comparisonProducts.map((product) => (
                <td key={product.id}>{product.category}</td>
              ))}
            </tr>
            <tr className="comparison-table__product-currentPrice">
              <th scope="row">Current Price</th>
              {comparisonProducts.map((product) => (
                <td key={product.id} className="text-center">
                  {product.currentPrice}
                </td>
              ))}
            </tr>
            <tr className="comparison-table__product-previousPrice">
              <th scope="row">Previous Price</th>
              {comparisonProducts.map((product) => (
                <td key={product.id} className="previousPrice">
                  {product.previousPrice}
                </td>
              ))}
            </tr>

            <tr className="comparison-table__product-processorBrand">
              <th scope="row">Processor brand</th>
              {comparisonProducts.map((product) => (
                <td key={product.id}>{product.processorBrand}</td>
              ))}
            </tr>
            <tr className="comparison-table__product-processorType">
              <th scope="row">Processor type</th>
              {comparisonProducts.map((product) => (
                <td key={product.id}>{product.processorType}</td>
              ))}
            </tr>
            <tr className="comparison-table__product-screenSize">
              <th scope="row">Screen size</th>
              {comparisonProducts.map((product) => (
                <td key={product.id}>{product.screenSize}</td>
              ))}
            </tr>
            <tr className="comparison-table__product-videoCard">
              <th scope="row">Video card</th>
              {comparisonProducts.map((product) => (
                <td key={product.id}>{product.videoCard}</td>
              ))}
            </tr>
            <tr className="comparison-table__product-operatingSystem">
              <th scope="row">OS</th>
              {comparisonProducts.map((product) => (
                <td key={product.id}>{product.operatingSystem}</td>
              ))}
            </tr>
            <tr className="comparison-table__product-ramMemory">
              <th scope="row">RAM</th>
              {comparisonProducts.map((product) => (
                <td key={product.id}>{product.ramMemory}</td>
              ))}
            </tr>
            <tr className="comparison-table__product-hardDriveCapacity">
              <th scope="row">HDC</th>
              {comparisonProducts.map((product) => (
                <td key={product.id}>{product.hardDriveCapacity}</td>
              ))}
            </tr>
            <tr className="comparison-table__product-color">
              <th scope="row">Color</th>
              {comparisonProducts.map((product) => (
                <td key={product.id}>{product.color}</td>
              ))}
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ComparisonTable;
