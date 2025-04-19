import { Link } from "react-router";

const Dashboard = () => {
    return (
        <div className="Dashboard" >
            <div className="dashboard-title">OTUZIANS</div>
            <Link to="/" style={{color:"inherit", textDecoration: "none"}} ><h3>Home</h3></Link>
            <Link to="/create" style={{color:"inherit", textDecoration: "none"}} ><h3>Create a Crewmate</h3></Link>
            <Link to="/gallery" style={{color:"inherit", textDecoration: "none"}} ><h3>Crewmate Gallery</h3></Link>
        </div>
    )
}

export default Dashboard;