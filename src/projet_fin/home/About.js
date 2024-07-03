import React from 'react'
import { Link } from 'react-router-dom'
import './styleAbout.css'
import about1 from '../img/about1.jpg'
import about2 from '../img/about2.jpg'

export default function About() {
  return (
    <div  style={{ backgroundColor:'rgb(236, 255, 255)'}}>
      <div className='about'>
          <h1 className='scrollrevealhome'>ABOUT US</h1>
          <p  className='scrollrevealhome2'> 
            At Pastries Tangier , we 'er more than just a bakery;
              we're a culinary sanctuary<br/> nestled in the heart of our
              commuity. With a passion for tradition and creativity , we <br/> 
              craft delightful Moroccaan pastries that embody ... <Link to={'/'}  style={{textDecoration:'none'}} className='text-warning'>More info <i class='bx bx-chevron-right-circle' style={{fontSize:"30px"}}></i></Link>
          </p>
      </div>
      <div className='about_img'>
        <div  className='about'>
          <img className='img_about scrollrevealimg3' src={about2} alt='' width={'700px'} />
          <h1    className='scrollrevealimg2' style={{padding:'30px'}}>OUR STORY</h1>
          <p   className='scrollrevealimg2'> 
            Our story at Pastries Tangier is one of
            passion ,tradition,and a deep-rooted love for Moroccan cuisine.It began with a vision... <Link to={'/'}  style={{textDecoration:'none'}} className='text-warning'>More info <i class='bx bx-chevron-right-circle' style={{fontSize:"30px"}}></i></Link>
          </p>        
        </div>
        <div className='about'>
          <img className='img_about scrollrevealimg2' src={about1} alt=''width={'700px'} /> 
          <h1  className='scrollrevealimg3' style={{padding:'30px'}}>OUR PHILOSOPHY</h1>
          <p   className='scrollrevealimg3'> 
            At Pastries Tangier ,our philosophy revolves around three core principles : passion , authenticity,and community... <Link to={'/'}  style={{textDecoration:'none'}} className='text-warning'>More info <i class='bx bx-chevron-right-circle' style={{fontSize:"30px"}}></i></Link>
          </p>        
        </div>
      </div>
    </div>
  )
}