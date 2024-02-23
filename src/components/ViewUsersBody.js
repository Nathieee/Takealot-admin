import { useEffect, useState } from "react";

function VewUsersBody(){
    
    const [users, setUsers] = useState([]);

    const getUsers = () => {
        fetch("http://159.65.21.42:9000/users")
        .then((resp) => resp.json())
        .then((data) => {
            // const myCategory =data.filter((item) => item.category === category)
            setUsers(data);
            console.log(data);
        }
        )
        .then((err) => console.log(err))
    }

    useEffect(() => {
        getUsers();
    }, [])



    const handleDelete =(id) => {
        fetch(`http://159.65.21.42:9000/user/${id}`,
            {method: "DELETE",
            headers: {"Content-Type": "application/json"}    
        }
            )
            .then((resp) => {
                if (resp.ok){
                    setUsers(users.filter((data) => data._id !== id))
                    console.log("User Deleted")
                }
                else(
                    console.log("Error Deleting User")
                )            
        })
        .catch((err) => console.log(err));
    }

    // const handleDelete =(id) => {
    //     fetch(`http://159.65.21.42:9000/users/${id}`,
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

    
    



    return(
        <div className="view_products_bg">
            <div className="view_products_content">
                <h1>VIEW PRODUCT CARDS</h1>  
                <div className="cards">
                    {users.map((user, id) =>(
                    <div className="box" key={id}>                        
                        <div className="text">
                            <h3>{user.name}</h3>
                            <h4>{user.phone}</h4>
                            <h4>{user.email}</h4>
                            <h5>{user.password}</h5>                            
                        </div>
                        <div className="btns">
                            <button className="edit">Edit</button>
                            <button className="delete" onClick={() => handleDelete(user._id)}>Delete</button>
                        </div>
                    </div> 
                    ))}                   
                </div>
            </div>
        </div>
    )
}

export default VewUsersBody;