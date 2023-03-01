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
import {useState} from "react";
import EmptyFavorites from "./EmptyFavorites";


export default function Favorites() {

  const favorites = useSelector(selectorFavorites)
    const productFavorites = useSelector(selectorFavoritesProduct);
    const dispatch = useDispatch();
    const [isEmpty, setIsEmpty] = useState(true);

    // useEffect(() => {
    //     if (favorites.length >= 1) {
    //         setIsEmpty(false)
    //     } else setIsEmpty(true)
    // }, [favorites])


    useEffect(() => {
        if (favorites.length >= 1) {
            setIsEmpty(false)
        } else setIsEmpty(true)

        dispatch(actionFetchProductFavoritesByItemNo(favorites))

    }, [favorites])


  return (
      <div className="sector_favorites">
          {isEmpty ?
              <EmptyFavorites/> :
                                  <Grid container spacing={4}>
                                      {productFavorites.map((el, index) => (
                                          <Grid className="grid-main-list" item xs="12" sm="5" md="3" key={el._id}>
                                              <ProductCard el={el} index={index} />
                                          </Grid>
                                      ))}
                                  </Grid>
          }
      </div>
  )
}