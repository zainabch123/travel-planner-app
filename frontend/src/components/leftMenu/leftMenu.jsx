import { Link } from "react-router-dom";
import { useState } from "react";
import useTrip from "../../hooks/useTrip";
import useAuth from "../../hooks/useAuth";


import './leftMenu.css'

const LeftMenu = () => {
      const { plannedTrips } = useTrip();
      const { user, logout } = useAuth();
      const [isVisible, setIsVisible] = useState(false);


      const countTripItems = (tripItems) => {
        if (!tripItems) return { hotels: 0, attractions: 0, restaurants: 0 };

        const hotels = tripItems.filter(
          (item) => item.category === "hotel"
        ).length;
        const attractions = tripItems.filter(
          (item) =>
            item.category === "attraction" || item.category === "geographic"
        ).length;
        const restaurants = tripItems.filter(
          (item) => item.category === "restaurant"
        ).length;

        return { hotels, attractions, restaurants };
      };

       const handleOnClickProfile = () => {
         setIsVisible(!isVisible);
       };

  return (
    <aside className="left-menu">
      <div className="travel-planner-logo" onClick={() => navigate("/")}>
        <svg
          fill="#000000"
          version="1.1"
          id="Layer_1"
          viewBox="0 0 512.001 512.001"
        >
          <g>
            <g>
              <path d="M344.381,143.771C254.765,56.017,102.37,103.776,79.825,227.7c-31.849,4.598-59.138,25.445-72.018,55.076    c-0.016,0.035-0.032,0.07-0.047,0.107c-26.687,61.602,18.784,130.232,85.51,130.232h282.267    c75.246,0,136.463-61.216,136.463-136.462C512,189.241,430.314,123.682,344.381,143.771z M375.537,381.12H93.271    c-69.246,0-84.534-98.263-18.714-119.456c14.753-4.65,43.01-7.348,74.38,21.892c6.464,6.024,16.586,5.667,22.61-0.794    c6.024-6.464,5.668-16.586-0.794-22.61c-17.93-16.712-38.071-27.33-58.484-31.453c22.034-99.077,147.374-131.851,215.247-56.305    c4.189,4.661,10.714,6.451,16.693,4.57c67.272-21.117,135.795,29.374,135.795,99.69    C480.005,334.256,433.141,381.12,375.537,381.12z" />
            </g>
          </g>
        </svg>
        <h1>TripPlanner</h1>
      </div>
      <div className="trip-links">
        <Link to="/">
          <h2 className="my-trips-heading">My Trips</h2>
        </Link>
        {plannedTrips && (
          <div className="trip-links">
            {plannedTrips.map((trip, index) => {
              const { hotels, attractions, restaurants } = countTripItems(
                trip.tripItems
              );
              return (
                <Link key={index} to={`/viewTrip/${trip.id}`}>
                  {trip.name}
                  <p className="trip-summary">
                    <span className="hotel-summary">
                      {hotels} hotel{hotels !== 1 ? "s" : ""}
                    </span>
                    <span>
                      {attractions} attraction{attractions !== 1 ? "s" : ""}
                    </span>
                    <span>
                      {restaurants} restaurant{restaurants !== 1 ? "s" : ""}
                    </span>
                  </p>
                </Link>
              );
            })}
          </div>
        )}
      </div>
      <div className="user-profile">
        {user && (
          <div className="user-details">
            <div className="profile-circle" onClick={handleOnClickProfile}>
              <p>{`${user.firstName[0]}${user.lastName[0]}`}</p>
            </div>
            <div className="profile-text">
              <p>{`${user.firstName}${user.lastName}`}</p>
              <p>useremail@email.com</p>
            </div>
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
    </aside>
  );
};

export default LeftMenu;
