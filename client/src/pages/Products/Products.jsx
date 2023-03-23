import FilterMainList from './components/FilterMainList';
import { Container } from '@mui/material';
import {
  selectorAllProducts,
  selectorSearchInputValue,
  selectorServerErrorProducts,
  selectorProductsQuantity,
  selectorPageLoading,
  selectorFilterRequest,
  selectorUrlAddress,
} from '../../selectors';
import {
  actionFetchAllProducts,
  actionFetchSearchFilterProducts,
  actionFetchSearchProducts,
  actionFilterRequest,
} from '../../reducers';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../../components/ProductCard';
import BreadCrumbs from '../../components/BreadCrumbs';
import ServerError from '../../components/Notifications/ServerError';
import Paginate from './components/Paginate';
import './Products.scss';
import Preloader from '../../components/Preloader';
import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { forEach } from 'lodash';

const Products = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  let urlString = location.search
  let newFilterRequestObj = useSelector(selectorFilterRequest)
  let requestObj = {...newFilterRequestObj}

  const urlAddress = useSelector(selectorUrlAddress) || urlString


let getLinkObj = {}
let stringToarr = urlString.substring(1)
stringToarr = stringToarr.replaceAll(/%2C/ig, ',')
let arr = stringToarr.split('&')
let a =  arr.map((el)=>{
  return el.split('=')
})

a.forEach((e)=>{
  getLinkObj[e[0]] = e[1]
})
console.log( getLinkObj, '======')

for(let key in requestObj){
  for(let keyLink in  getLinkObj){
    if(key == keyLink){
      console.log(requestObj[key], getLinkObj[keyLink])
      if(key == 'perPage' || key == 'startPage'){
        requestObj[key] = Number(getLinkObj[keyLink]) 
      }else{
        requestObj[key] = getLinkObj[keyLink] 
      }
   
    }
  }
}
console.log( requestObj, 'sdc')




useEffect(()=>{
  dispatch(actionFilterRequest(requestObj))   
  setSearchParams(urlAddress) 
},[urlAddress])




console.log(newFilterRequestObj, '787878')
    

  
   

/*   let string = urlString.replaceAll(/%3D/ig, '=')
  string = string.replaceAll(/%26/ig, '&') */
  console.log(urlString, 'asasas');

  const allProducts = useSelector(selectorAllProducts);
  const productsQuantity = useSelector(selectorProductsQuantity);
  const searchInputValue = useSelector(selectorSearchInputValue);
  const serverError = useSelector(selectorServerErrorProducts);
  const pageLoading = useSelector(selectorPageLoading);


 useEffect(() => {
    if (searchInputValue === '') {
      let obj = JSON.parse(sessionStorage.getItem('filterRequest'));
      if (obj) {
        dispatch(actionFetchSearchFilterProducts(obj));
      }  
      else {
        dispatch(actionFetchAllProducts(urlString));
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
                Products <span className="title_contrast">{productsQuantity} found</span>
              </p>
            </div>
            <section className="main-list__sections">
              <div className="main-list__sections--products">
                {allProducts.length > 0 && !serverError ? (
                  <>
                    <div className="grid-main-list">
                      {allProducts?.map((el, index) => (
                        <ProductCard el={el} key={el._id} index={index} />
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
