import { createContext, useState, useEffect } from "react";

// 1. Create context
export const MovieContext = createContext();

// 2. Create provider
export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on first render
  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavs);
  }, []);

  // Provide shared state
  return (
    <MovieContext.Provider value={{ movies, setMovies, favorites, setFavorites }}>
      {children}
    </MovieContext.Provider>
  );
};
