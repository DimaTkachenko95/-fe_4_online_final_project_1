import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
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


export default function Favorites() {

  const favorites = useSelector(selectorFavorites)
    const productFavorites = useSelector(selectorFavoritesProduct);
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(actionFetchProductFavoritesByItemNo(favorites))

    }, [favorites])


  return (
      <div className="sector_favorites">
                                  <Grid container spacing={4}>
                                      {productFavorites.map((el, index) => (
                                          <Grid className="grid-main-list" item xs="12" sm="6" md="4" key={el._id}>
                                              <ProductCard el={el} index={index} />
                                          </Grid>
                                      ))}
                                  </Grid>
      </div>
  )
}