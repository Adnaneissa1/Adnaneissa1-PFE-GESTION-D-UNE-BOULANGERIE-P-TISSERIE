import React from 'react'
import './styleHeeder.css'
import adresss from '../img/adresss.png'
export default function Heeder() {
  return (
    <div  style={{ backgroundColor:'rgb(236, 255, 255)'}}>
        <div  className='bg-dark' style={{color:'white'}}>
        <div className='header1'>
            <div style={{display:'flex'}}>
                <h2><a href='https://www.google.com/' style={{color:'white'}}><i class='bx bxl-instagram bg-warning' style={{borderRadius:'50%',padding:'10px'}}></i></a></h2>
                <h2><a href='https://www.google.com/' style={{color:'white'}}><i class='bx bxl-twitter bg-warning'  style={{borderRadius:'50%',padding:'10px'}}></i></a></h2>
                <h2><a href='https://www.google.com/' style={{color:'white'}}><i class='bx bxl-facebook-circle bg-warning' style={{borderRadius:'50%',padding:'10px'}}></i></a></h2>
            </div>
            <div>
                <h1 style={{fontWeight:'bolder'}}>Pastries Tangier</h1>
            </div>
            <div>
                <h6>pastries tangier become top known today</h6>
            </div>
        </div>
        <div className='header2'>
            <div>
                <div className='header_body'>
                    <h2><i class='bx bx-phone bg-warning'  style={{borderRadius:'50%',padding:'10px',marginRight:'20px'}}></i></h2>
                    <h4>PHONE</h4>
                </div>
                <div>
                    <h4>+212 567-89-0098</h4>
                </div>
            </div>
            <div>
                <div  className='header_body'>
                    <h2><i class='bx bx-envelope  bg-warning'  style={{borderRadius:'50%',padding:'10px',marginRight:'20px'}}></i></h2>
                    <h4>EMAIL</h4>
                </div>
                <div>
                    <h4>pastries.tangier@gmail.com</h4>
                </div>
            </div>
            <div>
                <div  className='header_body'>
                    <h2><i class='bx bx-location-plus bg-warning'  style={{borderRadius:'50%',padding:'10px',marginRight:'20px'}}></i></h2>
                    <h4>ADDRESS</h4>
                </div>
                <div>
                    <h4>2247 Tangie Street,76301r</h4>
                </div>
            </div>
        </div>
        <div  className='header3'>
            <div>
                <h6>Copyright © 2024 Pastries Tangier.All Rights Reserved .</h6>
            </div>
            <div>
                <h6>Privacy | Terms and condition</h6>
            </div>
        </div>
        </div>
    </div>
  )
}
