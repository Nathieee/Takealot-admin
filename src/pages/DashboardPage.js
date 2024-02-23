import DashboardBody from "../components/DashboardBody";
import SideBar from "../components/SideBar";



function DashboardPage(){
    return(
        <div className="dashboard_page">
            <SideBar />
            <DashboardBody />
        </div>
    )
}


export default DashboardPage;