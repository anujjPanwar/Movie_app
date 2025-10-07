import { useContext } from "react";
import Card from "../Components/card"
import { MovieContext, MovieProvider } from "../context/MovieContext";

function Fav (){
    const {movies,favorites,setMovies} = useContext(MovieContext)
    const dbdata = [...favorites];
    const data = movies.filter((val)=>{
        return(
            dbdata.includes(val.imdbID)
        )
    })

    

    return (
    <>
        {data == "" ? <h1 className="favText">Add Your Favourite Movies!</h1>: ""}
    <div> 
        <Card movies={data} />
    </div>
    </>
    )
}
export default Fav