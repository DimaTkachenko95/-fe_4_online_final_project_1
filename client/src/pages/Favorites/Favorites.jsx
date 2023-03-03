import * as React from 'react';
import './Favorites.scss';
import {useDispatch, useSelector} from "react-redux";
import {selectorFavorites, selectorFavoritesProduct,} from "../../selectors";
import {useEffect} from "react";
import {actionFetchProductFavoritesByItemNo} from "../../reducers/favorites.reducer";
import ProductCard from "../../components/ProductCard";
import Grid from "@mui/material/Grid";
import EmptyFavorites from "./EmptyFavorites";
import { Container } from '@mui/material';


export default function Favorites() {

  const favorites = useSelector(selectorFavorites)
    const productFavorites = useSelector(selectorFavoritesProduct);
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(actionFetchProductFavoritesByItemNo(favorites))
    }, [favorites])


  return (
      <div className="sector_favorites">
          <Container maxWidth="lg">
              <h1 className="favorites__title">Favorite <span className="title_contrast">Products</span></h1>
          {favorites.length <= 0 ?
              <EmptyFavorites/> :
              <div>
                  <Grid container spacing={12}>
                      {productFavorites.map((el, index) => (
                          <Grid className="grid-main-list" item xs="12" sm="6" md="4" key={el._id}>
                              <ProductCard el={el} index={index} />
                          </Grid>
                      ))}
                  </Grid>
              </div>
          }
          </Container>
      </div>

  )
}

