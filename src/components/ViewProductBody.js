import { useEffect, useState } from "react";
// import image from "./images/istockphoto-1281796609-612x612.jpg"

function VewProductBody(){
    
    const [products, setProducts] = useState([]);

    const getProducts = (category) => {
        fetch("http://159.65.21.42:9000/products")
        .then((resp) => resp.json())
        .then((data) => {
            const myCategory =data.filter((item) => item.category === category)
            setProducts(myCategory);
            console.log(myCategory);
        }
        )
        .then((err) => console.log(err))
    }

    useEffect(() => {
        getProducts("Bivans_frontend");
    }, [])


    // const handleDelete =(id) => {
    //     fetch(`http://159.65.21.42:9000/products/${id}`,
    //         {method: "DELETE"}
    //         )
    //         .then((resp) => {
    //           console.log(resp)
    //           if(!resp.ok){
    //               alert("Something went wrong")
    //           }
    //     })
    //     .catch((err) => console.log(err));
    // }


    const handleDelete =(id) => {
        fetch(`http://159.65.21.42:9000/product/${id}`,
            {method: "DELETE",
            headers: {"Content-Type": "application/json"}    
        }
            )
            .then((resp) => {
                if (resp.ok){
                    setProducts(products.filter((data) => data._id !== id))
                    console.log("Product Deleted")
                }
                else(
                    console.log("Error Deleting Product")
                )            
        })
        .catch((err) => console.log(err));
    }



    // const handleDelete = async (id) => {
    //   try {
    //     const response = await fetch(`http://159.65.21.42:9000/products/${id}`, {
    //       method: "DELETE",
    //     });
    
    //     if (!response.ok) {
    //       throw new Error("Something went wrong");
    //     }
    
    //     console.log(response);
    //   } catch (error) {
    //     console.log(error);
    //     alert("Error occurred while deleting the product.");
    //   }
    // };
    



    return(
        <div className="view_products_bg">
            <div className="view_products_content">
                <h1>VIEW PRODUCT CARDS</h1>  
                <div className="cards">
                    {products.map((product, id) =>(
                    <div className="box" key={id}>
                        <div className="pic">
                            <img src={product.image} alt="" />
                        </div>
                        <div className="text">
                            <h3>{product.name}</h3>
                            <h4>{product.category}</h4>
                            <h4>{product.price}</h4>
                            <h5>{product.quantity}</h5>
                            <p>{product.description}</p>
                        </div>
                        <div className="btns">
                            <button className="edit">Edit</button>
                            <button className="delete" onClick={() => handleDelete(product._id)}>Delete</button>
                        </div>
                    </div> 
                    ))}                   
                </div>
            </div>
        </div>
    )
}

export default VewProductBody;


// import { useEffect, useState } from "react";

// function VewProductBody() {
//   const [products, setProducts] = useState([]);

//   const getProducts = (category) => {
//     fetch("http://159.65.21.42:9000/products")
//       .then((resp) => resp.json())
//       .then((data) => {
//         const myCategory = data.filter((item) => item.category === category);
//         setProducts(myCategory);
//         console.log(myCategory);
//       })
//       .catch((err) => console.log(err));
//   };

//   useEffect(() => {
//     getProducts("Bivans_frontend");
//   }, []);

//   const handleDelete = (id) => {
//     fetch(`http://159.65.21.42:9000/products/${id}`, {
//       method: "DELETE",
//     //   headers: {"Content-Type": "application/json"}
//     })
//       .then((resp) => {
//         // resp.json();        
//         if (!resp.ok) {
//           alert("Something went wrong");
//         }
//       })
//     //   .then((data) => {
//     //     console.log(data);
//     //   })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div className="view_products_bg">
//       <div className="view_products_content">
//         <h1>VIEW PRODUCT CARDS</h1>
//         <div className="cards">
//           {products.map((product, id) => (
//             <div className="box" key={id}>
//               <div className="pic">
//                 <img src={product.image} alt="" />
//               </div>
//               <div className="text">
//                 <h3>{product.name}</h3>
//                 <h4>{product.category}</h4>
//                 <h4>{product.price}</h4>
//                 <h5>{product.quantity}</h5>
//                 <p>{product.description}</p>
//               </div>
//               <div className="btns">
//                 <button className="edit">Edit</button>
//                 <button className="delete" onClick={() => handleDelete(product._id)}>
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default VewProductBody;
