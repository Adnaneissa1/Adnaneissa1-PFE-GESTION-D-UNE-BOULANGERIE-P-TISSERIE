import React, { useEffect, useRef, useState } from 'react';
import Menu from '../home/Menu';
import Heeder from '../home/Heeder';
import './stylePanier.css';
import axios from 'axios';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Link, useParams } from 'react-router-dom';

export default function Panier() {
  const pdfRef = useRef();
  const [products, setProducts] = useState([]);
  const { idparams } = useParams();
  const [qnt, setQnt] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [produit, setProduit] = useState([]);
  const [prix, setPrix] = useState([]);
  const [description, setDescription] = useState("");
  const [total, setTotal] = useState(0);
  const [prixProduit, setPrixProduit] = useState([]);
  const [date, setDate] = useState(new Date());
  const [btnPanierFacteur, setBtnPanierFacteur] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleDelete = async (id) => {
    console.log(id);
    await axios.delete(`http://127.0.0.1:8000/api/products/${id}`);
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  };

  const handleCommander = (idProduit) => {
    const commandeProduit = products.find((product) => product.id === idProduit);
    setPrixProduit([...prixProduit, commandeProduit.prix * qnt, "*", qnt, ","]);
    setProduit([...produit, commandeProduit.description, ","]);
    setPrix([...prix, commandeProduit.prix * qnt]);
    setDescription(commandeProduit.description_produit);

    let somme = 0;
    for (let i = 0; i < [...prix, commandeProduit.prix * qnt].length; i++) {
      somme += [...prix, commandeProduit.prix * qnt][i];
    }
    setTotal(parseInt(somme));
  };

  const handleButtonClick = () => {
    setShowSuccess(true);
  };

  const DownloadPdf = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4', true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save('Pastries_Tangier.pdf');
    });
  };

  return (
    <div style={{ backgroundColor: 'rgb(236, 255, 255)' }}>
      <Menu />
      <div className='panier_d'>
        <h1>Votre panier</h1>
        <hr />
      </div>
      <div className='panier_dis'>
        <div>
          <div className='d-flex text-secondary titre-table-panier'>
            <h3>Article</h3>
            <h3>prix</h3>
            <h3>Qté</h3>
            <h3>Action</h3>
          </div>
          {products.map((product) => (
            <div key={product.id} className='d-flex tbpanier' style={{ backgroundColor: 'white', borderRadius: '50px' }}>
              <h1>
                <img style={{ borderRadius: '50%' }} src={`http://127.0.0.1:8000/storage/${product.image}`} alt={product.titre} width={'200px'} height={'200px'} /> {product.titre}
              </h1>
              <h1 style={{ marginRight: '20px' }}>{product.prix} DH</h1>
              <h1>
                <div className='d-flex'>
                  <input type="number" min={1} style={{ width: '120px', textAlign: 'center', marginRight: '120px' }} className='form-control' onChange={(e) => setQnt(e.target.value)} />
                  <Link onClick={() => (handleDelete(product.id))}><i className='bx bxs-trash-alt' style={{ backgroundColor: 'aqua', color: 'white', fontSize: '40px', borderRadius: '50%' }}></i></Link>
                  <Link onClick={() => (handleCommander(product.id))}><button className='btn btn-success'>Commander</button></Link>
                </div>
              </h1>
            </div>
          ))}
        </div>
        <div ref={pdfRef}>
          <div className="card" style={{ width: "33rem", marginTop: '115px', padding: '30px' }}>
            <div className="card-body">
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h5 className="card-title text text-secondary">Facteur </h5>
                <div>
                  <span style={{ borderTop: '2px solid black', borderBottom: '2px solid black' }}><b> Pastries</b></span><br /><i>Tangier</i>
                </div>
              </div>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item" style={{ padding: '20px' }}><span className='text_facteur'><u>date :</u></span><span className='text_span_fact'>{date.toLocaleString()}</span></li>
              <li className="list-group-item" style={{ padding: '15px' }}><span className='text_facteur'><u>produit : </u></span><br /><span className='text_span_fact'>{produit}</span></li>
              <li className="list-group-item" style={{ padding: '15px' }}><span className='text_facteur'><u>prix*qantité:</u></span><br /><span className='text_span_fact'>{prixProduit}</span></li>
              <li className="list-group-item" style={{ padding: '20px' }}>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" onClick={() => (setBtnPanierFacteur(false))} id="flexRadioDefault1" />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    livraison
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" onClick={() => (setBtnPanierFacteur(true))} name="flexRadioDefault" id="flexRadioDefault2" />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                    magasin
                  </label>
                </div>
              </li>
            </ul>
            <div className="card-body">
              <li className="list-group-item" style={{ padding: '15px' }}><span className='text_facteur'><u>Total :</u></span><span className='text_span_fact'>{btnPanierFacteur === false ? total + 10 : total}{total > 1 ? ' DH' : null}</span></li>
              <div className='text text-success'>{showSuccess && <h4 className='card-title p-5'>Commande réussie !</h4>}</div>
              <button className='btn btn-secondary' onClick={DownloadPdf}>Download PDF</button>
            </div>
          </div>
          <br /><br />
        </div>
      </div>
      <Heeder />
    </div>
  );
}
