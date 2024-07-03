import axios from 'axios'
import React, { useState } from 'react'

export default function AddProduct() {
    const [nom, setNom] = useState('');
    const [description, setDescription] = useState('');
    const [prix, setPrix] = useState('');
    const [quantiteEnStock, setQuantiteEnStock] = useState('');
    const [categorieNom, setCategorieNom] = useState('');
    const [image, setImage] = useState(null);


    
const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };
    const add=async (e)=>{
        e.preventDefault();

        const formData = new FormData();
        formData.append('nom', nom);
        formData.append('description', description);
        formData.append('prix', prix);
        formData.append('quantite_en_stock', quantiteEnStock);
        formData.append('categorie_nom', categorieNom);
        formData.append('image', image);
      try{
        const response =await axios.post("http://127.0.0.1:8000/api/products",formData)
        console.log("Response from backend:", response.data);

      }catch (err){
        console.log('err',err)
        
      }
    }
  return (
    <div id='main' className='main' >
        <h1 style={{textAlign:'center'}} >AddProduct</h1>
            <form className='' style={{width:'50%',marginLeft:'400px'}} >
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Nom :</label>
                    <input  onChange={(e) => setNom(e.target.value)} value={nom} name='nom' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">description :</label>
                    <textarea  onChange={(e) => setDescription(e.target.value)}  value={description} name='description' className='form-control'></textarea>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">prix :</label>
                    <input  onChange={(e) => setPrix(e.target.value)}  value={prix}  name='prix'type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">image :</label>
                    <input  onChange={handleImageChange} accept="image/*"  name='image' type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">quantite_en_stock :</label>
                    <input  onChange={(e) => setQuantiteEnStock(e.target.value)}  value={quantiteEnStock} name='quantite_en_stock' type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label"  >Nom categorie :</label>
                    {/* <select className="form-select" value={userf.categorie_nom}  onChange={(e) => setNom(e.target.value)} name='categorie_nom' >
                        <option selected>selectionner</option>
                        <option value="Pastry">Pastry</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Cake">Cake</option>
                        <option value="Specials">Specials</option>
                    </select> */}
                    <input  onChange={(e) => setCategorieNom(e.target.value)}   value={categorieNom} name='categorie_nom' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>

                <button onClick={e=>add(e)}  type="submit" class="btn btn-primary w-50 text-center">Ajouter</button>
    </form>
    </div>
  )
}
