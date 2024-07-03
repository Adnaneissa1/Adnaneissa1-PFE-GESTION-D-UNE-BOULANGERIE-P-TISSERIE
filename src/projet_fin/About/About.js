import React, { useEffect, useRef } from 'react'
import Menu from '../home/Menu'
import './styleAbout.css'
import img1 from '../img/img1.jpg'
import about1 from '../img/about1.jpg'
import vd1 from '../img/vd1.mp4'
import Heeder from '../home/Heeder'
export default function About() {
    const videoRef = useRef(null);

    useEffect(() => {
      // Ensure the video element is loaded before setting its currentTime
      if (videoRef.current) {
        // Set the currentTime of the video to 10 seconds (10 * 1000 milliseconds)
        videoRef.current.currentTime = 30;
      }
    }, []); 
  return (
    <div  style={{ backgroundColor:'rgb(236, 255, 255)'}}>
        <Menu/>
        <div className='about-display'>
            <div className='pad_div1'>
                <p  className='text-about'>
                    <h2 className='text-about2 text-warning'><span style={{fontSize:'50px'}}>About Pastries</span></h2>
                    At Pastries tangier,our philosophy revolves around three core principles :<br/><span style={{color:'grey'}}>passion , authenticity and community ...</span>
                </p>
            </div>
            <div  className='pad_div2'>
                <img src={img1} width={'100%'} style={{borderRadius:'100px 0px 100px 0px'}}/>
            </div>
        </div>
        <div className='about2'>
            <h1  className='about2_h1'>Historyy toooo pastries</h1>
            <p  className='about2_p'>
                At Pastries Tangier , we're more than just a bakery:we're a culinary<br/>
                sanctuary nestled in the heart of our commuity .
                With a passion for<br/> tradition and creativity , we craft delightful Moroccan pastries that<br/> embody ...
            </p>
        </div>
        <div className='vd' style={{display:'flex',justifyContent:'center'}}>
        <video style={{borderRadius:'30px 150px 30px 150px'}} src={vd1} width="70%" ref={videoRef}  autoPlay muted loop ></video>
        </div>
        <h1  className='about2_h1 p-5' style={{textAlign:'center'}}>Why Pastries Tangier</h1>
        <div className='cardabout'>
            
            <div className="cardA">

                <h2 className="card-title">QUALITY</h2>
                <div className="card-content">
                    <ul>
                        <li>
                            <p className="card-body" style={{letterSpacing:'1px'}}>
                                La quintessence de la pâtisserie : des saveurs raffinées, une texture parfaite, un régal pour les sens.
                            </p>
                        </li>
                        <li>
                            <p className="card-body">
                                Nos pâtisseries sont le reflet de notre passion pour l'artisanat et du souci du détail, pour une expérience sucrée incomparable        
                            </p>
                        </li>
                    </ul> 

                </div>
            </div>   

            <div className="cardA">
                <h2 className="card-title">DELAIS</h2>
                <div className="card-content">
                    
                    <ul>
                        <li>
                            <p className="card-body">
                                Nous vous prions de noter que nos gâteaux sur mesure nécessitent généralement un délai de préparation d'au moins 72 heures.        
                            </p>
                        </li>
                        <li>
                            <p className="card-body">
                            Pour garantir la fraîcheur de nos produits, veuillez passer commande au moins 24 heures à l'avance pour les pâtisseries spéciales.                </p>
                        </li>
                    </ul>
                </div>
            </div> 

            <div className="cardA">
                <h2 className="card-title">COUTE</h2>
                <div className="card-content">
                    <ul>
                        <li>
                            <p className="card-body">
                                Le coût de nos délices sucrés varie en fonction de la complexité de la recette, des ingrédients utilisés et de la taille de la commande.
                            </p>
                        </li>
                        <li>
                            <p className="card-body">
                                Veuillez noter que les frais de livraison peuvent être ajoutés au coût total de la commande, en fonction de la distance et des conditions de livraison.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>   

        </div>

        <Heeder/>
    </div>
  )
}
