import myImage from "../assets/icon.png";
import { useState, useEffect, useContext } from "react";
import { MovieContext, MovieProvider } from "../context/MovieContext";

function card({movies}) {
  const {favorites,setFavorites} = useContext(MovieContext)

  const addFav = (vall) => {
    let updatedFavs = [...favorites];
    
    

    if (favorites.includes(vall)) {
      // If already in favorites, remove it
      updatedFavs = updatedFavs.filter((id) => id.imdbID !== vall.imdbID);
    } else {
      // Add to favorites
      updatedFavs.push(vall);
    }

    // Update localStorage and state
    localStorage.setItem("favorites", JSON.stringify(updatedFavs));
    setFavorites(updatedFavs);
  };
  return (
    <div className="container">
      {movies == "False" ? (
        <h4>not found</h4>
      ) : (
        movies.map((val, index) => {
          // const isFav = favorites.includes(val); // start edit
          const isFav = [...favorites].some((x)=>x.imdbID == val.imdbID)
          return (
            <div className="card" key={index}>
              {/* <p style={Display='Block'}>{val.imdbID}</p> */}
              <img
                onClick={() => addFav(val)}
                className="fanvorite-ico"
                src={myImage}
                alt="favourite"
                style={{
                  filter: isFav
                    ? "hue-rotate(0deg) saturate(4) brightness(1.2)"
                    : "grayscale(100%)",
                }}
              />
              <img src={val.Poster} alt="Movies" />
              <h5>{val.Title}</h5>
              <p>{val.Year}</p>
            </div>
          );
        })
      )}
    </div>
  );
}
export default card;
