import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useTrip from "../../hooks/useTrip";
import useAuth from "../../hooks/useAuth";

import "./header.css";

const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isVisible, setIsVisible] = useState(false);
  const { fetchTravelData } = useTrip();
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) return;

    setLoading(true);

    const res = await fetchTravelData(searchInput);

    setLoading(false);

    if (res) {
      setSearchInput("");
      navigate("/search");
    }
  };

  function handleInput(event) {
    setSearchInput(event.target.value);
  }

  const handleOnClickProfile = () => {
    setIsVisible(!isVisible);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="travel-planner-logo" onClick={() => navigate("/")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#89CFF0"
            height="45px"
            width="45px"
            version="1.1"
            id="Layer_1"
            viewBox="0 0 455 455"
            stroke="#89CFF0"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              <g>
                <path d="M391.016,135.059c-5.829-49.336-47.791-87.605-98.695-87.605c-33.184,0-62.556,16.272-80.607,41.262 c2.108-0.081,4.223-0.127,6.349-0.127c74.519,0,138.462,50.218,157.487,120.164c21.304,4.704,40.866,15.374,56.667,31.173 c1.403,1.403,2.764,2.836,4.085,4.297C447.852,232.648,455,216.682,455,199.04C455,163.704,426.352,135.059,391.016,135.059z" />
                <path d="M350.359,236.02c-7.814-66.133-64.062-117.431-132.296-117.431c-68.234,0-124.482,51.298-132.296,117.431 C38.402,236.02,0,274.417,0,321.783s38.397,85.763,85.763,85.763h264.601c47.366,0,85.763-38.397,85.763-85.763 S397.725,236.02,350.359,236.02z" />
              </g>
            </g>
          </svg>
          <h1>TripPlanner</h1>
        </div>
        <div className="search-bar-section">
          <div className="search-bar-wrapper">
            <input
              type="text"
              id="search-bar"
              name="search-bar"
              placeholder="Search hotels, attractions, restaurants, and more..."
              value={searchInput || ""}
              onChange={handleInput}
            ></input>
            {loading ? (
              <button id="loading-button" type="button">
                <div className="spinner"></div>
              </button>
            ) : (
              <button
                id="search-query-submit"
                type="button"
                onClick={handleSubmit}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  width="25px"
                  height="25px"
                >
                  <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
                </svg>
              </button>
            )}
          </div>
        </div>
        <div className="user-profile-section">
          {user && (
            <div className="profile-circle" onClick={handleOnClickProfile}>
              <p>{`${user.firstName[0]}${user.lastName[0]}`}</p>
            </div>
          )}

          {isVisible && (
            <div className="user-panel">
              <Link to="#">
                <p>Profile</p>
              </Link>

              <Link to="#">
                <p>Account Settings</p>
              </Link>

              <Link
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  logout();
                }}
              >
                <p>Log Out</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
