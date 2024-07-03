import React, { useEffect, useRef, useState } from "react";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import cake from "../img/cake.jpg";
import delicious from "../img/delicious.png";
import sweet from "../img/sweet.jpg";
import "./styleHome.css";
import ScrollReveal from "scrollreveal";
import Typed from "typed.js";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const images = [img1, img2, img3, img4];
  const [index, setIndex] = useState(0);
  const slideInLeftRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    slideInLeftRefs.forEach((ref, i) => {
      if (ref.current) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              ref.current.classList.add("slideInLeft");
            }
          });
        }, options);

        observer.observe(ref.current);

        return () => observer.disconnect();
      }
    });
  }, [slideInLeftRefs]);

  useEffect(() => {
    const typed = new Typed(".multiple-text", {
      strings: ["Pastries Tangier"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

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

  return (
    <div className="home_parent" style={{ backgroundColor: "rgb(236, 255, 255)" }}>
      <div className="home fadeIn">
        <div className="homehh slideInLeft" style={{ gap: "50px" }}>
          <div>
            <div style={{ fontSize: "60px" }} className="scrollrevealhome">
              <span className="text-warning multiple-text"> </span>- A Taste of{" "}
              <br />
              Moroccan Elegance
            </div>

            <div style={{ width: "50%" }} className="scrollrevealhome">
              <p>
                Welcome to <b className="text text-orange">Pastries Tangier</b>,
                where you'll discover Moroccan indulgence at its finest. From
                delicate pastries to decadent gateaux, our creations embody the
                vibrant spirit of Morocco in every bite.
              </p>
            </div>
            <div>
              <button
                style={{ padding: "20px", color: "white" }}
                className="btn btn-warning scrollrevealhomebtn"
              >
                See Cakes & Specials
              </button>
            </div>
          </div>
          <div style={{ padding: "100px" }} className="d-flex yass">
            <div>
              {" "}
              <img className="img3 scrollrevealimg" src={img3} alt="" />
            </div>
            <div style={{ marginLeft: "5%", width: "40%" }}>
              <p className="scrollrevealhome2">CAKE OF THE WEEK</p> <br />
              <h3 className="scrollrevealhome2">Choco Yuzu Macaron</h3>
              <p className="scrollrevealhome2">
                If you have an occasion and are in search of a distinctive
                flavor, then our Choco Yuzu Macaron is the perfect choice.
              </p>
              <Link to={"reservation"}>
                <button
                  style={{ padding: "20px", color: "white" }}
                  className="btn btn-warning scrollrevealhomebtn2"
                >
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img id="changing-image" className="img" src={images[index]} alt="" />
        </div>
      </div>

      <div className="bg_img">
        <div ref={slideInLeftRefs[0]} className="bg_imgh1 format_card scrollrevealimg2">
          <div className="content_img  scrollrevealimg2">
            <img
              className=""
              src={delicious}
              style={{ width: "50px", textAlign: "center" }}
              alt=""
            />
            <h4>Delicious Bakery</h4>
            <p>Where every bite is a taste of happiness.</p>
          </div>
        </div>
        <div ref={slideInLeftRefs[1]} className="bg_imgh2 format_card scrollrevealimg2">
          <div className="content_img  scrollrevealimg2">
            <img
              className=""
              src={cake}
              style={{ width: "50px", textAlign: "center" }}
              alt=""
            />
            <h3>Cake</h3>
            <p>A symbol of celebration and indulgence.</p>
          </div>
        </div>
        <div ref={slideInLeftRefs[2]} className="bg_imgh3 format_card scrollrevealimg2">
          <div className="content_img  scrollrevealimg2">
            <img
              className=""
              src={sweet}
              style={{ width: "50px", textAlign: "center" }}
              alt=""
            />
            <h3>Sweet Delights</h3>
            <p>A sweet symphony of tradition and innovation.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
