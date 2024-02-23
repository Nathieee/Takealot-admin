import { useEffect, useState, createContext } from "react";


export const FoodContext = createContext();

function FoodProvider(props) {

    // const contextData = useContext(FoodContext);
    // const {cart} = contextData;

    const [cart, setCart] = useState([]);
    console.log(cart)
    let localStorageCart = JSON.parse(localStorage.getItem("Chop&Grill"));

    useEffect(() => {
        if(localStorageCart){
            setCart(localStorageCart);
        }
    },[])

    return(
        <FoodContext.Provider value={{cart, setCart}}>
            {props.children}
        </FoodContext.Provider>
    );
}

export default FoodProvider;