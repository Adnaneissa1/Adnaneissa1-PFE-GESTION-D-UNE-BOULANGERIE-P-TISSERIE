import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditProduct() {
    const {id}=useParams()
    const nav =useNavigate()
    // console.log(id)
    // const [userf,setUserf]=useState({
    //     nom:'',
    //     description:'',
    //     prix:'',
    //     quantite_en_stock:'',
    //     categorie_nom:'',
    //     image:''
    // })
    const [product, setProduct] = useState({
      nom: "",
      description: "",
      prix: "",
      quantite_en_stock: "",
      categorie_nom: "",
      image: ""
  });
  

  useEffect(() => {
      getProduct();
  }, []);

  const getProduct = () => {
      fetch(`http://127.0.0.1:8000/api/products/${id}`)
          .then((response) => response.json())
          .then((data) => {
              console.warn(data);
              setProduct(data);
          })
          .catch((error) => console.error('Error fetching product:', error));
  };

  const handleInputChange = (event) => {
      const { name, value } = event.target;
      setProduct({ ...product, [name]: value });
  };
  const handleImageChange = event => {
    const file = event.target.files[0];
    setProduct({ ...product, image: file });
};
  const handleSubmit = (event) => {
      event.preventDefault();
      editProduct();
  };

  const editProduct = () => {
      fetch(`http://127.0.0.1:8000/api/products/${id}`, {
          method: 'PUT',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(product)
      })
          .then((response) => response.json())
          .then((data) => {
              console.warn(data);
              // Peut-être ajouter un message de confirmation ici
              getProduct(); // Pour récupérer les données mises à jour après l'édition
              // Redirection, si nécessaire
              nav('/employe/products');
          })
          .catch((error) => console.error('Error editing product:', error));
  };
  return (
    <div  style={{marginLeft:'300px',marginTop:'100px'}}>
        <h1 style={{textAlign:'center'}} >Edit Product</h1>
            <form className='' style={{width:'50%',marginLeft:'400px'}} onSubmit={handleSubmit} >
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Nom :</label>
                    <input  onChange={handleInputChange}  value={product.nom} name='nom' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">description :</label>
                    <textarea onChange={handleInputChange}  value={product.description} name='description' className='form-control'></textarea>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">prix :</label>
                    <input  onChange={handleInputChange}   value={product.prix}  name='prix'type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">image :</label>
                    <img  src={`http://127.0.0.1:8000/storage/${product.image}`}  width='50%'  height='150px'  style={{borderRadius:'50%'}} alt='' />
                    {/* <input onChange={handleImageChange} accept="image/*"  defaultChecked={product.image} name='image' type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/> */}
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">quantite_en_stock :</label>
                    <input onChange={handleInputChange}  value={product.quantite_en_stock} name='quantite_en_stock' type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label"  >Nom categorie :</label>
                    <select className="form-select" value={product.categorie_nom}onChange={handleInputChange}   name='categorie_nom' >
                        <option selected >selectionner</option>
                        <option value="Pastry">Pastry</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Cake">Cake</option>
                        <option value="Specials">Specials</option>
                    </select>
                    {/* <input  onChange={(e)=>{setCategorie_nom(e.target.value)}}   value={categorie_nom} name='categorie_nom' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/> */}
                </div>

                <button   type="submit" class="btn btn-primary w-50 text-center">Edit</button>
    </form>
    </div>
  )
}