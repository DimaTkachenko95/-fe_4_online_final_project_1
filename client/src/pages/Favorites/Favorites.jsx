import * as React from 'react';
import './Favorites.scss';
import {useDispatch, useSelector} from "react-redux";
import {
    selectorFavorites,
    selectorFavoritesProduct,
} from "../../selectors";
import {useEffect} from "react";

import {actionFetchProductFavoritesByItemNo} from "../../reducers/favorites.reducer";
import ProductCard from "../../components/ProductCard";

import Grid from "@mui/material/Grid";
import EmptyFavorites from "./EmptyFavorites";


export default function Favorites() {

  const favorites = useSelector(selectorFavorites)
    const productFavorites = useSelector(selectorFavoritesProduct);
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(actionFetchProductFavoritesByItemNo(favorites))
    }, [favorites])


  return (
      <div className="sector_favorites">
          {favorites.length <= 1 ?
              <EmptyFavorites/> :
                                  <Grid  container xs={12} spacing={3}>
                                      {productFavorites.map((el, index) => (
                                          <Grid className="grid_favorites" item  key={el._id}>
                                              <ProductCard el={el} index={index} />
                                          </Grid>
                                      ))}
                                  </Grid>
          }
      </div>
  )
}