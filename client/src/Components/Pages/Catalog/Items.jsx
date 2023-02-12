import { Link } from "react-router-dom";
import Item from '@mui/material/Grid';
import Grid from "@mui/material/Grid";
import { ReactComponent as Favorites } from "./img/favorit.svg"
import { width } from "@mui/system";
import { selectorAllProducts } from "../../../selectors";
import { actionFetchAllProducts } from "../../../reducers";
import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'


const Items = () => {
    const allProducts = useSelector(selectorAllProducts)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(actionFetchAllProducts())
        console.log(allProducts, "aaaaaaaaa")
    },[])

    

    const productsList = [
        {
          "id": 1,
          "name": "PowerShot SX620 HS",
          "price": 500,
          "img": "./img/orig(1).png",
          "producer": "Canon"
        },
        {
          "id": 2,
          "name": "PowerShot SX620 HS",
          "price": 676,
          "img": "./img/orig(2).png",
          "producer": "Sony"
        },
        {
          "id": 3,
          "name": "PowerShot SX620 HS",
          "price": 234,
          "img": "./img/orig(3).png",
          "producer": "Sony"
        },
        {
          "id": 4,
          "name": "PowerShot SX620 HS",
          "price": 898,
          "img": "./img/orig(4).png",
          "producer": "Sony"
        },
        {
          "id": 5,
          "name": "PowerShot SX620 HS",
          "price": 875,
          "img": "./img/orig(4).png",
          "producer": "Sony"
        },
        {
          "id": 6,
          "name": "PowerShot SX620 HS",
          "price": 898,
          "img": "./img/photo.png",
          "producer": "Sony"
        }
      ]

      const item = productsList?.map(({ name, id, price, img, producer }) => (
        <Grid  item xs="12" sm="6" md="4">
          <div className="list"  id={id} key={id}>
            <div className="list__item">
              <img className="list__item--img" src={require(`${img}`)} alt="photo" />
              <span className="list__item--rating" >
                <span className="list__item--rating--line"></span>
              </span>
              <span>
                <Favorites className="list__item--favorite" />
              </span>
              <h5 className="list__item--name">{name}</h5>
              <p className="list__item--producer">{producer}</p>
              <p className="list__item--price">{price}$</p>
              <button className="list__item--information">Information</button>
            </div>
          </div>
        </Grid>
      ))

    return (
        <>
        {item}
        </>
    )
}

export default Items;
