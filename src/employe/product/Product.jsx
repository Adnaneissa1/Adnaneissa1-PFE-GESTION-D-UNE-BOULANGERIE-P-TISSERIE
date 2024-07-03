import axios from 'axios';
import React, {  useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Product() {
        // const [data_produit,setData_produit]=useState([])
        // console.log(data_produit)
    // useEffect=(()=>{
    //     fetchData();
    //     console.log("hshhs")
        
    // },[])
    // const fetchData= async () => {
        
    //     try{
    //         const result =await axios.get('http://127.0.0.1:8000/api/products')
    //         setData_produit(result)
    //         // setData_produit(result.data.results)
    //         console.log(result)
    //         console.log("d")
    //     }catch(err){
    //         console.log('err',err)

    //     }

    // }
    
    const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }, []); // Empty 
  const handl_delete=async(id)=>{
    console.log(id);
    await axios.delete(`http://127.0.0.1:8000/api/products/${id}`)
    const newdata_produit=products.filter((e)=>{
      return(
        e.id!==id
      )
    })
    setProducts(newdata_produit)
  }

  return (
    <div  style={{marginLeft:'300px',marginTop:'100px'}}>
        <div  className="container">
            <Link to={'/employe/add_product'}>
                <button  className="alert alert-primary">Ajouter</button>
            </Link>
            <table className="table table-hover" style={{textAlign:'center'}}>
                <tr>
                    <th>Id</th>
                    <th>Nom</th>
                    <th>description</th>                    
                    <th>prix</th>                    
                    <th>quantite_en_stock</th>                    
                    <th>image</th>
                                
                    <th>Action</th>                    
                </tr>
                {
                    products.map((e,k)=>(
                        <tr key={k}>
                            <td>{e.id}</td>
                            <td>{e.nom}</td>
                            <td>{e.description}</td>
                            <td>{e.prix}</td>
                            <td>{e.quantite_en_stock}</td>
                            
                            <td><img  src={`http://127.0.0.1:8000/storage/${e.image}`}  width='50%'  height='150px'  style={{borderRadius:'50%'}} alt=''/></td>
                            <td>
                                <Link to={`/employe/edit_product/${e.id}`}>
                                    <button  className="alert alert-success">Edit</button>
                                </Link>
                                <button onClick={()=>(handl_delete(e.id))} className="alert alert-danger">Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>
    </div>
  )
}
