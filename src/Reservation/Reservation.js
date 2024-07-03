import React, { useEffect, useState } from 'react'
import Menu from '../projet_fin/home/Menu'
import './styleResrvation.css'
import { Link } from 'react-router-dom'
import produi1 from '../projet_fin/img/produit1.jpg'
import produi2 from '../projet_fin/img/produit2.jpg'
import img3 from '../projet_fin/img/img3.jpg'
import star from '../projet_fin/img/star.png'
import Heeder from '../projet_fin/home/Heeder'
import axios from 'axios'

export default function Reservation() {
  const nombres = [1,2,3,4,5];

  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [nombre_like, setNombre_like] = useState(false);
  const [like, setLike] = useState(0);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      filterProductsByCategory(selectedCategory);
    } else {
      setFilteredProducts(allProducts);
    }
  }, [selectedCategory, allProducts]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/products');
      setAllProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const filterProductsByCategory = (category) => {
    const filtered = allProducts.filter(product => product.categorie_id === category.id);
    setFilteredProducts(filtered);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchTerm('');
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    const filtered = allProducts.filter(product => {
      const category = categories.find(category => category.id === product.categorie_id);
      return category && category.nom.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setFilteredProducts(filtered);
    setSelectedCategory(null); // Reset selected category when searching
  };
  


  const [userf,setUserf]=useState({
    nom:'',
    description:'',
    prix:'',
    quantite_en_stock:'',
    categorie_nom:'',
    image:''
})

const handle_change=(e)=>{
    setUserf({
        ...userf,
        [e.target.name]:e.target.value
    })
}

const ajouterPanier = async (idProduit, quantite) => {
  try {
    // Récupérer l'ID client du localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    const idClient = user ? user.id : null;

    if (!idClient) {
      throw new Error('ID client introuvable dans le localStorage');
    }

    console.log(idClient, idProduit, quantite);

    const response = await axios.post('http://127.0.0.1:8000/api/ajouterProduit', {
      id_client: idClient,
      id_produit: idProduit,
      quantite: quantite,
    });

    console.log(response.data.message); // Affiche le message de réussite
  } catch (error) {
    console.error(error.message); // Affiche le message d'erreur
  }
};

const ajouterlike = async (idProduit) => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/panier/ajouterlike', {
      id_pr: idProduit,
    });
    // Update the like count in the state based on the response
    setLike(response.data.likes_count); // Assuming the backend returns the updated like count
    console.log(response.data.message); // Display success message

    // Reload the page
    window.location.reload();
  } catch (error) {
    console.error(error.response.data.message); // Display error message
  }
};



  
  
  return (
    <div  style={{ backgroundColor:'rgb(236, 255, 255)'}}>
        <Menu/>
        <p className='text text-warning text-res'><i>discover sweer delights crafted
            with love and expertise to tantalize 
            your taste buds.</i>
        </p>
        <div className='list'>
                <div  className='listdiv'>
                  {categories.map((category,index) => (
                      <Link  key={index} className='listLink' onClick={() => handleCategoryChange(category)}> {category.nom}</Link>
                    ))
                  }                  
                </div>
        </div>
        <div className='search'>
          <input value={searchTerm} onChange={handleSearchChange} className='form-control w-50 input-search' placeholder='Recherche '/> <i class='bx bx-search-alt-2' style={{fontSize:'40px',color:'grey',padding:'10px 0 0 20px'}}></i>
        </div>
        <div className='w-100 produitt row' >
        {filteredProducts.map((e,k)=>(
                <div key={k} className="card info_produitt col-3"  >
                    <img className="card-img-top card_img"  src={`http://127.0.0.1:8000/storage/${e.image}`}  height={'300px'} alt="Card image cap"/>
                    <div class="card-body">
                        <p class="card-text">{e.nom} </p>
                        <h4 className='titre_responcive'>{e.description}</h4>
                        <div style={{display:'flex'}}>
                          {nombres.map((e)=>( <img src={star}   className='stare_responcive'style={{height:'20px',marginLeft:'10px'}}/>))}
                        </div>
                        <div  className='card-art'>
                            <h3  className='card-prix'>{e.prix} Dh</h3>   
                            <button className='card_produit_Link1' onClick={()=>ajouterlike(e.id)}><i class='bx bx-heart'style={{ color: like ? 'red' : 'null' }}><span style={{color:'black'}}>{e.likes_count}</span></i></button>
                            <button  className='card_produit_Link2'><i  onClick={()=>ajouterPanier(e.id,1)} class='bx bx-plus'></i></button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <Heeder/>
    </div>
  )
}