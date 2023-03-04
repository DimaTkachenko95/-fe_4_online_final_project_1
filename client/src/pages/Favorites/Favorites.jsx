import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Favorites.scss';
import {useSelector} from "react-redux";
import {selectorFavorites} from "../../selectors";

export default function Favorites() {

  const favorites = useSelector(selectorFavorites)
  console.log(favorites)


  return (
      <div className="sector_favorites">
        {favorites.map((item) =>(
            <Card  className='card' sx={{ maxWidth:200 }}>
              <CardActionArea>
                <CardMedia className="card_img"
                    component="img"
                  /*   image={item.imageUrls[0]} */
                    alt="laptop"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.brand}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.currentPrice}$
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        ))}
      </div>
  )
}