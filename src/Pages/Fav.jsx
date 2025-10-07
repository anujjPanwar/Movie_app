import { useContext } from "react";
import Card from "../Components/card"
import { MovieContext, MovieProvider } from "../context/MovieContext";

function Fav (){
    const {movies,favorites,setMovies} = useContext(MovieContext)
    // const dbdata = [...favorites];
    // console.log("dbdata " + dbdata);
    // console.log("favourites " + favorites);
    // console.log('favourite//////' + JSON.stringify(favorites));
    
    // const data = movies.filter((val)=>{
    //     return(
    //         dbdata.includes(val.imdbID)
    //     )
    // })

    

    return (
    <>
        {favorites == "" ? <h1 className="favText">Add Your Favourite Movies!</h1>: ""}
    <div> 
        <Card movies={favorites} />
    </div>
    </>
    )
}
export default Fav