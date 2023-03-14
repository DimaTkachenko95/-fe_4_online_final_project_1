import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectorScales,
  selectorProductComp,
  selectorIsScalesPageLoading
} from '../../../selectors';
import { actionDeleteFromScales, actionFetchProductScalesByItemNo } from '../../../reducers';
import './ComparisonTable.scss';
import Preloader from '../../../components/Preloader';
import EmptyResult from '../../../components/EmptyResult/EmptyResult';

const ComparisonTable = () => {
  const dispatch = useDispatch();
  const allProd = useSelector(selectorProductComp);
  const itemNoArr = useSelector(selectorScales);
  const isLoading = useSelector(selectorIsScalesPageLoading);

  useEffect(() => {
    dispatch(actionFetchProductScalesByItemNo(itemNoArr));
  }, [itemNoArr]);

  const delFromTable = (id) => {
    dispatch(actionDeleteFromScales(id));
  };

  return (
    <div className="comparison-container__wrapper">
      <Preloader open={isLoading} />
      {allProd.length <= 0 ? (
        <EmptyResult />
      ) : (
        <table className="comparison-table">
          <thead>
            <tr>
              <th />
              {allProd.map((product) => (
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
              {allProd.map((product) => (
                <th key={product.id}>{product.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="comparison-table__product-brand">
              <th scope="row">Brand</th>
              {allProd.map((product) => (
                <td key={product.id}>{product.brand}</td>
              ))}
            </tr>
            <tr className="comparison-table__product-category">
              <th scope="row">Category</th>
              {allProd.map((product) => (
                <td key={product.id}>{product.category}</td>
              ))}
            </tr>
            <tr className="comparison-table__product-currentPrice">
              <th scope="row">Current Price</th>
              {allProd.map((product) => (
                <td key={product.id} className="text-center">
                  {product.currentPrice} $
                </td>
              ))}
            </tr>
            <tr className="comparison-table__product-processorType">
              <th scope="row">Processor type</th>
              {allProd.map((product) => (
                <td key={product.id}>{product.processorType}</td>
              ))}
            </tr>
            <tr className="comparison-table__product-screenSize">
              <th scope="row">Screen size</th>
              {allProd.map((product) => (
                <td key={product.id}>{product.screenSize}"</td>
              ))}
            </tr>
            <tr className="comparison-table__product-videoCard">
              <th scope="row">Video card</th>
              {allProd.map((product) => (
                <td key={product.id}>{product.videoCard}</td>
              ))}
            </tr>
            <tr className="comparison-table__product-operatingSystem">
              <th scope="row">OS</th>
              {allProd.map((product) => (
                <td key={product.id}>{product.operatingSystem}</td>
              ))}
            </tr>
            <tr className="comparison-table__product-ramMemory">
              <th scope="row">RAM</th>
              {allProd.map((product) => (
                <td key={product.id}>{product.ramMemory}</td>
              ))}
            </tr>
            <tr className="comparison-table__product-hardDriveCapacity">
              <th scope="row">SSD</th>
              {allProd.map((product) => (
                <td key={product.id}>{product.hardDriveCapacity}</td>
              ))}
            </tr>
            <tr className="comparison-table__product-color">
              <th scope="row">Color</th>
              {allProd.map((product) => (
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
