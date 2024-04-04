import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import TitleCardsContainer from "./Components/TitleCardsContainer/TitleCardsContainer";
import MovieDetail from "./Components/MovieDetail";

const API_KEY = "942e67125be0a0d10153e54af62e1e5e";

const GENRES = {
  Önerilen: "popularity.desc",
  Romantik: 10749,
  Müzikal: 10402,
  Komedi: 35,
  Aksiyon: 28,
  Korku: 27,
  Gerilim: 53,
  Animasyon: 16,
  Drama: 18,
  BilimKurgu: 878,
};

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="card-sections-container">
              <TitleCardsContainer
                key="popular"
                titleText="Önerilen Filmler"
                apiKey={`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1`}
              />
              {Object.keys(GENRES)
                .filter((genreKey) => genreKey !== "Önerilen")
                .map((genreKey) => (
                  <TitleCardsContainer
                    key={genreKey}
                    titleText={`${
                      genreKey.charAt(0).toUpperCase() + genreKey.slice(1)
                    } Filmler`}
                    apiKey={`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=tr-TR&with_genres=${GENRES[genreKey]}&sort_by=popularity.desc&include_adult=true&include_video=false&page=1`}
                  />
                ))}
            </div>
          }
        />
        <Route path="/detay/:id" element={<MovieDetail />} />
      </Routes>
    </>
  );
}

export default App;
