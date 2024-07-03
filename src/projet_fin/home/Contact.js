import React, { useState } from "react";
import "./styleContact.css";
import maptanger from "../img/map_tanger.jpg";
import contact1 from "../img/contact1.png";
import contact2 from "../img/contact2.png";
import star from "../img/star.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Contact() {
  const nombres = [1, 2, 3, 4, 5];

  const information_contact = [
    {
      id: 0,
      nom: "yassin",
      message:
        "Je voulais juste dire que vos pâtisseries sont absolument divines ! Chaque bouchée est un véritable délice pour les papilles. Merci pour votre travail exceptionnel !",
    },
    {
      id: 1,
      nom: "ziko",
      message:
        "Je suis toujours ébloui par la qualité et la saveur de vos pâtisseries. Chaque fois que je passe devant votre boutique, je ne peux m'empêcher d'entrer et de me régaler. Merci pour ces moments gourmands !",
    },
    {
      id: 2,
      nom: "adnane",
      message:
        "Vos pâtisseries sont tout simplement incroyables ! Elles sont non seulement magnifiques à regarder, mais elles ont aussi un goût exquis. Vous avez vraiment le don de rendre chaque jour un peu plus doux",
    },
    {
      id: 3,
      nom: "aya",
      message:
        "Je voulais vous faire savoir à quel point j'apprécie vos délicieuses pâtisseries. Elles sont toujours fraîches, savoureuses et réconfortantes. Merci d'apporter tant de joie à ma journée !",
    },
    {
      id: 4,
      nom: "salma",
      message:
        "Chaque fois que je déguste l'une de vos pâtisseries, c'est comme si je faisais un voyage au paradis des desserts. Votre talent et votre passion transparaissent dans chaque création. Merci pour ces moments de pur bonheur !",
    },
    {
      id: 5,
      nom: "omar",
      message:
        "Je suis un grand amateur de pâtisseries, et les vôtres sont de loin les meilleures que j'ai jamais goûtées ! Chaque bouchée est une explosion de saveurs et de textures. Merci pour cette expérience gustative inoubliable !",
    },
    {
      id: 6,
      nom: "ali",
      message:
        "Votre pâtisserie est mon petit coin de paradis. Chaque fois que j'y entre, je suis accueilli par l'odeur enivrante de vos créations fraîches. Merci d'égayer mes journées avec vos délicieuses pâtisseries !",
    },
    {
      id: 7,
      nom: "khalil",
      message:
        "Je suis toujours épaté par la créativité et l'ingéniosité de vos pâtisseries. Chaque dessert est une œuvre d'art à part entière, et le goût est à la hauteur de l'esthétique. Merci pour cette expérience sensorielle inégalée !",
    },
    {
      id: 7,
      nom: "riham",
      message:
        "Je suis toujours épaté par la créativité et l'ingéniosité de vos pâtisseries. Chaque dessert est une œuvre d'art à part entière, et le goût est à la hauteur de l'esthétique. Merci pour cette expérience sensorielle inégalée !",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  // const [data_produit,setData_produit]=useState([])
  // useEffect=(()=>{
  //     fetchData();
  // },[])
  // const fetchData=async()=>{
  //     try{
  //         const result =await axios('http::/...')
  //         setData_produit(result)
  //     }catch(err){
  //         console.log('err')
  //     }
  // }

  const [userf, setUserf] = useState({
    email: "",
    message: "",
  });
  const handle_change = (e) => {
    setUserf({
      ...userf,
      [e.target.name]: e.target.value,
    });
  };
  // const add=async (e)=>{
  //   try{
  //     const responce =await axios.post("lien",userf)
  //   }catch (err){
  //     console.log('err')
  //   }
  // }
  return (
    <div
      style={{
        borderRadius: "50px 50px 0px 0px",
        backgroundColor: "rgb(236, 255, 255)",
      }}
    >
      <div className="contact_h">
        <h3 className="text-warning titre_contact1">TESTIMONIALS</h3>
        <h1 className="contact_h1  titre_contact2">Our Client Reviws</h1>
      </div>
      <div className="slider-container w-75 container-fluid produit produit_c">
        <Slider {...settings}>
          {information_contact.map((e, k) => (
            <div key={k} className="card backimage">
              <div
                className="card-footer"
                style={{
                  backgroundColor: "white",
                  borderRadius: "20px",
                  padding: "12px",
                }}
              >
                <b className="bb">
                  <center>
                    <u>{e.nom} </u>
                  </center>
                </b>
                <b className="text-warning">
                  <center>Customers</center>
                </b>
                <h6 style={{ padding: "20px" }}>"{e.message}"</h6>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {nombres.map((e) => (
                    <img
                      src={star}
                      style={{ height: "20px", marginLeft: "10px" }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div>
        <h1 className="contact_h1 text-center titre_contact3">Contact</h1>
        <div className="contact">
          <div
            style={{
              backgroundColor: "white",
              width: "850px",
              padding: "80px",
              color: "aqua",
            }}
          >
            <h3 style={{ paddingBottom: "20px" }}>Get In Touch</h3>
            <div class="mb-3">
              <input
                onChange={(e) => handle_change(e)}
                type="email"
                class="form-control input text-secondary"
                id="exampleFormControlInput1"
                placeholder="Your email"
              />
            </div>
            <div class="mb-3">
              <select className="form-control input">
                <option>Feed-back</option>
                <option>Message</option>
              </select>
            </div>
            <div class="mb-3">
              <textarea
                onChange={(e) => handle_change(e)}
                class="form-control input text-secondary"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Message"
              ></textarea>
            </div>
            <div class="">
              <button
                className="btn btn-info btn-contact"
                style={{ color: "white" }}
              >
                SEND NOW
              </button>
              {/* <button onClick={e=>add(e)} className='btn btn-info btn-contact' style={{color:'white'}}>SEND NOW</button> */}
            </div>
          </div>
          <div className="imgmap">
            <img width={"850px"} src={maptanger} alt="" />
          </div>
        </div>
      </div>
      <div
        className="contact_alert back"
        style={{
          color: "white",
          paddingTop: "50px",
          paddingLeft: "130px",
          border: "1px solid white",
          borderRadius: "0px 100px 0px 0px",
        }}
      >
        <h2 className="h2_contact">
          Let,s Choose Your Favorite GATEAUX / CAKES{" "}
        </h2>
        <h2 className="h2_contact">Foods</h2>
        <div
          style={{ display: "flex", justifyContent: "right", padding: "20px" }}
        >
          <button
            className="btn"
            style={{
              backgroundColor: "white",
              borderRadius: "120px",
              padding: "15px",
            }}
          >
            Order Now
          </button>
        </div>

        <div className="contact_h2">
          <h2>
            <img src={contact1} height={"60px"} style={{ padding: "10px" }} />
            Indulge in Sweet Moments !
            <img src={contact1} height={"60px"} style={{ padding: "10px" }} />
          </h2>
          <h2>
            <img src={contact2} height={"60px"} style={{ padding: "10px" }} />
            Life is short,eat the cake !{" "}
            <img src={contact2} height={"60px"} style={{ padding: "10px" }} />
          </h2>
        </div>
      </div>
    </div>
  );
}
