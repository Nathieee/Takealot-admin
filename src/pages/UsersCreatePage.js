import SideBar from "../components/SideBar";
import UserCreateBody from "../components/UserCreateBody";



function UsersCreatePage(){
    return(
        <div className="user_create_page">
            <SideBar />
            <UserCreateBody />
        </div>
    )
}


export default UsersCreatePage;