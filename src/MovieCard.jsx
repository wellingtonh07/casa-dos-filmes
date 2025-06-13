import React, { useState } from "react";

const API_URL = "https://www.omdbapi.com?apikey=b3126bd6";

const MovieCard = ({ movie }) => {
  const { imdbID, Year, Poster, Title, Type } = movie;

  const [details, setDetails] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCardClick = async () => {
    if (showDetails) {
      setShowDetails(false);
      return;
    }

    if (!details) {
      setLoading(true);
      try {
        const res = await fetch(`${API_URL}&i=${imdbID}&plot=short`);
        const data = await res.json();
        setDetails(data);
        console.log("Detalhes do filme:", data); // Debug
        setShowDetails(true);
      } catch (err) {
        console.error("Erro ao buscar detalhes:", err);
      } finally {
        setLoading(false);
      }
    } else {
      setShowDetails(true);
    }
  };

  return (
    <div className="movie-wrapper">
      <div className="movie" onClick={handleCardClick} style={{ cursor: "pointer" }}>
        <div>
          <p>{Year}</p>
        </div>

        <div>
          <img
            src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
            alt={Title}
          />
        </div>

        <div>
          <span>{Type}</span>
          <h3>{Title}</h3>
        </div>
      </div>

      {loading && <p className="movie-loading">Carregando detalhes...</p>}

      {showDetails && details && (
        <div className="movie-details">
          <p><strong>Sinopse:</strong> {details.Plot}</p>
          <p><strong>Nota IMDb:</strong> {details.imdbRating}</p>
          <p><strong>Duração:</strong> {details.Runtime}</p>
          <p><strong>Gênero:</strong> {details.Genre}</p>
          <p><strong>Diretor:</strong> {details.Director}</p>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
