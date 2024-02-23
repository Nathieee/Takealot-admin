import { IoBag, IoPeople, IoCart } from "react-icons/io5";
import { useEffect, useState } from "react";


function DashboardBody(){

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


    const cart = JSON.parse(localStorage.getItem('Takealot'));

    return(
        <div className="dashboard_bg">
            <div className="dashboard_content">
                <h1>Dashboard</h1>
                <div className="cards_div">
                    <div className="card" id="card1">
                        <div className="text">
                            <h4>Total Products</h4>
                            <h3>{products.length}</h3>
                        </div>
                        <div className="icon">
                            <IoBag  className="card_icon"/>
                        </div>
                    </div>
                    <div className="card" id="card2">
                        <div className="text">
                            <h4>Total Users</h4>
                            <h3>{users.length}</h3>
                        </div>
                        <div className="icon">
                            <IoPeople className="card_icon"/>
                        </div>
                    </div>
                    <div className="card" id="card3">
                        <div className="text">
                            <h4>Products in cart</h4>
                            <h3>{cart.length}</h3>
                        </div>
                        <div className="icon">
                            <IoCart className="card_icon"/>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default DashboardBody;