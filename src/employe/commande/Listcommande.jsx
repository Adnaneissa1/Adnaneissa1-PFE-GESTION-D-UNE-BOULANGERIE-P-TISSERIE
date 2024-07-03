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
    fetch('http://127.0.0.1:8000/api/index')
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
        console.error('Fetch  wwwwwwwwwwww:', error);
      });
  }, []); // Empty 
//   const handl_delete=async(id)=>{
//     console.log(id);
//     await axios.delete(`http://127.0.0.1:8000/api/products/${id}`)
//     const newdata_produit=products.filter((e)=>{
//       return(
//         e.id!==id
//       )
//     })
//     setProducts(newdata_produit)
//   }

  return (
    <div  style={{marginLeft:'300px',marginTop:'100px'}}>
        <div  className="container">

            <table className="table table-hover" style={{textAlign:'center'}}>
                <tr>
                    <th>Id</th>
                    <th>Date_creation</th>
                    <th>Status</th>                    
                    <th>Prix_Produit*Qnt</th>                    
                    <th>Produit</th>                    
                    <th>Total</th>
                                
                    <th>Action</th>                    
                </tr>
                {
                    products.map((e,k)=>(
                        <tr key={k}>
                            <td>{e.id}</td>
                            <td>{e.date_creation}</td>
                            <td>{e.status}</td>
                            <td>{e.prixproduit}</td>
                            <td>{e.produit}</td>
                            
                            <td>{e.total}</td>
                            <td>
                                <Link to={`/employe/edit_product/${e.id}`}>
                                    <button  className="alert alert-success">Edit</button>
                                </Link>
                                {/* <button onClick={()=>(handl_delete(e.id))} className="alert alert-danger">Delete</button> */}
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>
    </div>
  )
}
