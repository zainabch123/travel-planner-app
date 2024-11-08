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
        <button id="loading-button" type="button" >
          <div className="spinner"></div>
          </button> ) : (
            <button id="search-query-submit" type="button" onClick={handleSubmit}>Search
            </button>
          )
        }
      </div>
    </header>
  );
};

export default Header;
