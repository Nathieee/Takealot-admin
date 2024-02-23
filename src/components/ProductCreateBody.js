import { useState } from "react";

function ProductCreateBody(){

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [err, setErr] = useState(false);


    const submitValidation = (e) => {
        e.preventDefault();
        if (name==="" || category==="" || price ==="" || quantity === ""  || description === "" ){
            setErr(true);                                                                                                  
            return;
        }
        

        let Product = {
            name: name,
            category: category,
            price: price,
            quantity: quantity,
            image: image,
            description: description,           
        }
        
    
        fetch("http://159.65.21.42:9000/create/product", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(Product),
        })
        .then((resp) => resp.json())
        .then((data) => {
            alert("New Product Created");
            console.log(data);
        })
        .catch((err) => console.log(err));
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);}};
    

    return(
        <div className="product_create_bg">
            <div className="product_create_content">
                <h1>CREATE NEW PRODUCT</h1>  
                <form className="product_admin_form" onSubmit={submitValidation}>
                    <div className="form_group">
                        <label>Category</label>
                        <select value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="">Select Category</option>                            
                            <option value="Bivans_frontend">Bivans_frontend</option>
                            {/* <option value="takealot_trial">takealot_trial</option> */}
                        </select>
                        {err && category ===""? <span>Category Required</span> : null}
                    </div>
                    <div className="form_group">
                        <label>Product Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                        {err && name ===""? <span>Name Required</span> : null}
                    </div>
                    <div className="form_group">
                        <label>Price</label>
                        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
                        {err && price ===""? <span>Price Required</span> : null}
                    </div>
                    <div className="form_group">
                        <label>Quantity</label>
                        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
                        {err && quantity ===""? <span>Quantity Required</span> : null}
                    </div>
                    <div className="form_group">
                        <label>Image</label>
                        <input type="file" name="file" onChange={handleFileChange}/>
                        {err && image ===""? <span>Image Required</span> : null}
                    </div>
                    <div className="form_group">
                        <label>Description</label>
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
                        {err && description ===""? <span>Description Required</span> : null}
                    </div>                    
                    <button>Create Product</button>
                </form>             
            </div>
        </div>
    )
}

export default ProductCreateBody;