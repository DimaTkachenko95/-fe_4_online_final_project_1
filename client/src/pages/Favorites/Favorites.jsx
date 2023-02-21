// import './Favorites.scss';
//
// const Favorites = () => {
//
//   return(
//
//   )
//
//
// };
//
// export default Favorites;
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Favorites.scss';
import {useEffect, useState} from "react";

export default function Favorites({itemList}) {

  const [goodsInStar, setGoodsInStar]= useState([]);

  const getFavoriteList = (favoritesList) => {
    const new_list = []
    if (itemList.length){
      itemList.forEach(item => {
        favoritesList.forEach(item_id => {
          if (item.id === item_id) {
            new_list.push(item)
          }
        })
      })
    }

    return new_list;
  }

  useEffect( () => {
    const itemStar = JSON.parse(localStorage.getItem("favorites"))
    if (itemStar) {
      setGoodsInStar(getFavoriteList(itemStar))
    }
  }, [])



  return (
      <div>
        {goodsInStar.map((item,index) =>(
      <Card  className='card' sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
              component="img"
              height="140"
              image={item.img}
              alt="laptop"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
        ))}
          </div>
  );
}
