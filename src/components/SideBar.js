import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";


function SideBar(){
    return(
        <div className="sidebar_content">
            <h3><Link to="/" className="sidebar_links">Dashboard <IoArrowForward /></Link></h3>
            <h3><Link to="/view-products" className="sidebar_links">View Products <IoArrowForward /></Link></h3>
            <h3><Link to="/view-users" className="sidebar_links">view Users <IoArrowForward /></Link></h3>
            <h3><Link to="/create-product" className="sidebar_links">Create Products <IoArrowForward /></Link></h3>
            <h3><Link to="/create-user" className="sidebar_links">Create Users <IoArrowForward /></Link></h3>
        </div>
    )
}


export default SideBar;