import ProductCreateBody from "../components/ProductCreateBody";
import SideBar from "../components/SideBar";



function ProductCreatePage(){
    return(
        <div className="product_create_page">
            <SideBar />
            <ProductCreateBody />
        </div>
    )
}


export default ProductCreatePage;