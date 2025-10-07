import { useContext, useEffect, useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Fav from "./Pages/Fav";
import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router";
import { MovieContext } from "./context/MovieContext";

function App() {
  const [search, setSearch] = useState("");
  const {movies,setMovies} = useContext(MovieContext);


  // const [favorites, setFavorites] = useContext(MovieContext);

  // Load favorites from localStorage on mount
  // useEffect(() => {
  //   const storedFavs = JSON.parse(localStorage.getItem("favorites")) || [];
  //   setFavorites(storedFavs);
  // }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://www.omdbapi.com/?apikey=7926a37a&s=batman&page=2"
        ); // 🔁 Replace with actual API
        const data = await response.json();
        setMovies(data.Search);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const sendText = () => {
    async function fetchSearchData() {
      try {
        const url = `https://www.omdbapi.com/?apikey=7926a37a&s=${
          search == "" ? "Batman" : search
        }&page=1`;
        const response = await fetch(`${url}`); // 🔁 Replace with actual API
        const data = await response.json();
        if (data.Response == "True") {
          setMovies(data.Search);
        } else {
          setMovies(data.Response);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchSearchData();
  };

  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home setSearch={setSearch} sendText={sendText} />}
          />
          <Route path="/Fav" element={<Fav />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
