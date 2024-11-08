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
    </aside>
  );
};

export default LeftMenu;
