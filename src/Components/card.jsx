import myImage from "../assets/icon.png";
import { useState, useEffect, useContext } from "react";
import { MovieContext, MovieProvider } from "../context/MovieContext";

function card({movies}) {
  const {favorites,setFavorites} = useContext(MovieContext)

  const addFav = (imdbID) => {
    let updatedFavs = [...favorites];

    if (favorites.includes(imdbID)) {
      // If already in favorites, remove it
      updatedFavs = updatedFavs.filter((id) => id !== imdbID);
    } else {
      // Add to favorites
      updatedFavs.push(imdbID);
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
          const isFav = favorites.includes(val.imdbID);
          return (
            <div className="card" key={index}>
              {/* <p style={Display='Block'}>{val.imdbID}</p> */}
              <img
                onClick={() => addFav(val.imdbID)}
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
