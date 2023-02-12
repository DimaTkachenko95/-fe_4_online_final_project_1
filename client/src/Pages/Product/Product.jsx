import "./Product.scss";
import * as React from 'react';
import Container from '@mui/material/Container';
import {AiOutlineStar} from 'react-icons/ai';
import {GiScales} from "react-icons/gi";
import {GrInstagram} from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
import {AiFillTwitterCircle} from "react-icons/ai";
import {RiWhatsappFill} from "react-icons/ri";
import {FaViber} from "react-icons/fa";
import {AiOutlineDeliveredProcedure} from "react-icons/ai";
import {TbTruckDelivery} from "react-icons/tb";
import {GiWallet} from "react-icons/gi";
import {BsShieldFillCheck} from 'react-icons/bs';

const Product = () => {

  const prodItem = [
    {
      "id": 1,
      "image": "../img/one.png",
    },
    {
      "id": 2,
      "image": "../img/two.png",
    },
    {
      "id": 3,
      "image": "../img/three.png",
    },
    {
      "id": 4,
      "image": "../img/for.png",
    },
  ]

  const card = prodItem?.map(({ id, image}) => (
        <li className="product__item" id={id} key={id}>
          <button className="product__btn">
          <img className="product__item--image" width={55} height={55} src={image} alt="photo" />
          </button>
        </li>
  ))

  return (
      <Container maxWidth="xl">
        <div className="product__title">
            <h5 className="product__name">canon</h5>
            <p className="product__modal">5D Mark IV body (without lens)</p>
        </div>

      <div className="product__section">
      <aside className="product">
          <div className="product__card">
            <div className="product__tabs">
              <ul className="product__list">
                {card}
              </ul>
              <div className="product__img">
                <img src="./img/one.png" alt=""/>
              </div>
              <div className="product__icon">
                <button className="product__icon--btn"><GiScales /></button>
                <button className="product__icon--btn"><AiOutlineStar /></button>
              </div>
            </div>
            <ul className="product__social">
              <li className="product__social--item"><a href="https://www.instagram.com/" target="_blank"><GrInstagram style={{color: '#fd5949'}} /></a></li>
              <li className="product__social--item"><a href="https://www.facebook.com/" target="_blank"><BsFacebook style={{color: '#3B5998'}}/></a></li>
              <li className="product__social--item" style={{fontSize: 32}}><a href="https://twitter.com/" target="_blank"><AiFillTwitterCircle style={{color: '#55ACEE'}}/></a></li>
              <li className="product__social--item" style={{fontSize: 34}}><a href="https://www.whatsapp.com/" target="_blank"><RiWhatsappFill style={{color: '#4CAF50'}}/></a></li>
              <li className="product__social--item" style={{fontSize: 32}}><a href="https://www.viber.com/" target="_blank"><FaViber style={{color: '#7D3DAF'}}/></a></li>
            </ul>
          </div>
        <h3 className="product__info">Information</h3>
        <ul className="product__list-info">
          <li className="product__item-info">Depth <span className="product__item--span">CMOS</span></li>
          <li className="product__item-info">Type <span className="product__item--span">Mirror</span></li>
          <li className="product__item-info">Matrix <span className="product__item--span">23.5 x 15.6 мм</span></li>
          <li className="product__item-info">Permission <span className="product__item--span">45 megapixels</span></li>
          <li className="product__item-info">Video <span className="product__item--span">3K</span></li>
          <li className="product__item-info">Bayonet <span className="product__item--span">Nikon F</span></li>
          <li className="product__item-info">Exposure corection <span className="product__item--span">+/- 5 EV in 1/3 increments</span></li>
          <li className="product__item-info">Weight <span className="product__item--span">530g</span></li>
        </ul>
       </aside>
        <main className="product__description">
            <h4 className="product__info">Product description</h4>
            <p className="product__text">The recording of an image in a camera is carried out by a photochemical method when light is applied to a 
              photosensitive photographic material. The latent image obtained in this way is converted into a visible one 
              during laboratory processing. In a digital camera, photofixation occurs by photoelectric conversion of an optical image into an electrical signal, 
              the digital data of which is stored on a non-volatile medium. <a href="#" style={{color: '#60B021', borderBottom: '1px solid #60B021'}}>Expand all text</a>
            </p>
            <button className="product__stock-btn">In stock</button>

            <div className="product__section-price">
              <h3 className="product__info">Price in BestLaptops24</h3>
              <p className="product__price">500 <span>$</span></p>
              <div className="product__buttons">
              <button className="product__buy-btn">Add to cart</button>
              </div>
            </div>


            <ul className="product__services">
              <li className="product__services-item"><AiOutlineDeliveredProcedure style={{fontSize: 25}} /> <p>Pickup from points of issue</p> <p>Pick up tomorrow from 09:00</p> <span>Free</span></li>
              <li className="product__services-item"><TbTruckDelivery style={{fontSize: 25}}/> <p>Courier delivery</p> <p>Delivery in 2 days</p> <span>10 $</span></li>
            </ul>

            <ul className="product__guarantee">
              <li className="product__guarantee-item"><GiWallet style={{fontSize: 25, color: '#75758A', paddingRight: 20}}/><span style={{fontWeight: 700}}>Payment.</span> Payment upon receipt of the goods, Google Pay, Online card, Cashless for legal entities, Pay online with the "Pakunok Malyuka" social card, Cashless for individuals, Apple Pay, Pay online with the "Yepidtrimka" card, Visa, Mastercard</li>
              <li className="product__guarantee-item"><BsShieldFillCheck style={{fontSize: 25, color: '#75758A', paddingRight: 20}}/><span style={{fontWeight: 700}}>Guarantee.</span>  12 months Exchange / return of goods within 14 days</li>
            </ul>
        </main>
      </div>
      </Container>
      
  )
}

export default Product;
