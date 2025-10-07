import { Link } from "react-router"

function NavBar(){
    return (
    <div className="NavBar">
        <div className="movie-app">
            <Link className="text" to='/'>Movies App</Link>
        </div>
        <div>
            <Link to='/'>Home</Link>
        </div>
        <div>
            <Link to='/Fav'>Favourite</Link>
        </div>
    </div>
    )
}
export default NavBar