import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "https://www.omdbapi.com?apikey=b3126bd6";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null); // novo estado para erro

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    try {
      setError(null); // resetar erro antes da busca
      const response = await fetch(`${API_URL}&s=${title}`);

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      const data = await response.json();
      console.log("Resposta da API:", data); // debug da resposta

      if (data.Response === "False") {
        setMovies([]);
        setError(data.Error || "Erro ao buscar filmes");
      } else {
        setMovies(data.Search);
      }
    } catch (err) {
      console.error("Erro na requisição:", err);
      setError("Erro ao buscar filmes. Tente novamente mais tarde.");
      setMovies([]);
    }
  };

  return (
    <div className="app">
      <h1>Casa dos Filmes</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Procurar por filmes"
        />
        <img
          src={SearchIcon}
          alt="procurar"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {error && <div className="empty"><h2>{error}</h2></div>}

      {!error && movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      ) : !error && (
        <div className="empty">
          <h2>Não foi encontrado nenhum filme.</h2>
        </div>
      )}
    </div>
  );
};

export default App;
