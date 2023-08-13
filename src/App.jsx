import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Movies } from "./components/Movies";
import { WatchList } from "./components/WatchList";
import { MovieDetail } from "./components/MovieDetail";
import { Starred } from "./components/Starred";
import { Link } from "react-router-dom";
import { useMovies } from "./context/MoviesProvider";

export default function App() {
  const { state, dispatch } = useMovies();

  return (
    <>
      <div className="App">
        <div>
          <div className="navbar">
            <Link to="/">
              <h2>IMDB</h2>
            </Link>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search movies..."
                value={state.searchQuery}
                onChange={(e) =>
                  dispatch({
                    type: "SET_SEARCH_QUERY",
                    payload: e.target.value
                  })
                }
                className="search-input"
              />
            </div>
            <nav className="nav-links">
              <NavLink className="navLink" to="/">
                Movies
              </NavLink>
              <NavLink className="navLink" to="/watchlist">
                Watch List
              </NavLink>
              <NavLink className="navLink" to="/starred">
                Starred Movies
              </NavLink>
            </nav>
          </div>
          <div style={{ width: "100%" }}>
            <Routes>
              <Route path="/" element={<Movies />} />
              <Route path="/watchlist" element={<WatchList />} />
              <Route path="/movie/:movieId" element={<MovieDetail />} />
              <Route path="/starred" element={<Starred />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}
