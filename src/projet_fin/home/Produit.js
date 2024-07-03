import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './styleProduits.css'
import produi1 from '../img/produit1.jpg'
import produi2 from '../img/produit2.jpg'
import img3 from '../img/img3.jpg'
import star from '../img/star.png'
import Carousel from 'react-bootstrap/Carousel';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Produit() {
    const nombres = [1,2,3,4,5];

    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch('http://127.0.0.1:8000/api/products')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setProducts(data);
        })
        .catch(error => {
          console.error('Fetch error:', error);
        });
    }, []); // Empty 
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    };
    
  return (
    <div style={{}}>
        <div>
            <h1 className='h1 h1_produit'>Ready for the deliciousness<br/>of our products!</h1>
            <div className='list'>
                <div  className='listdiv'>
                    <Link to={'/'}  className='listLink'>Pastry</Link>
                    <Link to={'/'}  className='listLink'>Bakery</Link>
                    <Link to={'/'}  className='listLink'>Cake</Link>
                    <Link to={'/'}  className='listLink'>Specials</Link>                    
                </div>
            </div>
        </div>
        

        <div className='slider-container w-75 container-fluid produit produit_p' >
        <Slider {...settings}>
            {products.map((e,k)=>(
                <div key={k} className="card info_produit"  >
                    <img className="card-img-top" src={`http://127.0.0.1:8000/storage/${e.image}`} alt="Card image cap" height={'300px'}/>
                    <div class="card-body">
                        <p class="card-text">{e.nom} </p>
                        <h5 className='titre_responcive'>{e.description}</h5>
                        <div style={{display:'flex'}}>
                          {nombres.map((e)=>( <img src={star}   className='stare_responcive'style={{height:'20px',marginLeft:'10px'}}/>))}
                        </div>
                        <div  className='card-art'>

                            <h3  className='card-prix'>{e.prix} Dh</h3>
                            {/* <h1 className=''><i class='bx bx-heart alert alert-warning card_produit_Link1'></i></h1>
                            <h1><i class='bx bx-plus  alert alert-warning card_produit_Link1'></i></h1> */}
                            <h1 className='card_produit_Link1'><i class='bx bx-heart'></i></h1>
                            <h1  className='card_produit_Link2'><i class='bx bx-plus'></i></h1>
                        </div>
                    </div>
                </div>
            ))}
            </Slider>
        </div>
        
        <h2 style={{textAlign:'center'}}> <Link to={'/reservation'}  style={{textDecoration:'none'}} className='text-warning'>View All <i class='bx bx-chevron-right-circle' style={{fontSize:"30px"}}></i></Link></h2>
    </div>
  )
}
