import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './stylenav.css';
import 'boxicons/css/boxicons.min.css';
import ScrollReveal from 'scrollreveal';
import { Link } from 'react-router-dom';

ScrollReveal({
    reset: true, 
    distance: '80px', 
    duration: 2000,   
    delay: 0,
});

function Menu() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if user data exists in localStorage
        const user = localStorage.getItem('user');
        if (user) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const handleLogout = () => {
        // Effacez les données stockées localement
        localStorage.removeItem('user'); // Supposons que vous stockiez les informations de l'utilisateur dans 'user'
        // Mettre à jour l'état pour refléter la déconnexion
        setIsLoggedIn(false);
        // Naviguez vers la page d'accueil
    };

    return (
        <div>
            <Navbar className='navbar navbar-expand-lg fixed'  expand="lg" sticky='top'>
                <Container className='d-flex justify-content-beetwen'>
                    <Navbar.Brand href="/" style={{ fontFamily:'Oxygen'}}>
                        <h4>
                            <span style={{borderTop:'2px solid black',borderBottom:'2px solid black'}}><b>Pastries</b></span><br/><i>Tangier</i>
                        </h4>
                    </Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className='icons' style={{justifyContent:'end'}}>
                        <Nav className="me-auto" style={{textAlign:'center',gap:'20px'}}>  
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/cakes">Cakes&Specials</Nav.Link>
                            <Nav.Link href="/reservation">Reservation</Nav.Link>
                            <Nav.Link href="/panier">Order</Nav.Link>
                            <Nav.Link href="/about">About Us</Nav.Link>
                            <Nav.Link href="/conatct_no">Contact</Nav.Link>
                            
                        </Nav>
                        <Nav style={{gap:'0.5rem', alignItems:'center'}}>
                            <box-icon name='search'></box-icon>
                            <h3>                                
                                <i class='bx bx-heart'></i>
                            </h3>
                            <h3><i className='bx bxs-store'></i> </h3>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                {!isLoggedIn ? (
                                <Nav.Link href="/signin" className='log' style={{marginLeft:'240px'}}><b> <i class='bx bx-user'></i>Signin</b></Nav.Link>
                            ) : (
                                <Nav.Link href="/">
                                    <button onClick={handleLogout} className="btn btn-outline-danger log"><i class="bi bi-box-arrow-right"></i>Logout</button>
                                </Nav.Link>
                            )}
            </Navbar>
        </div>
    );
}

export default Menu;
