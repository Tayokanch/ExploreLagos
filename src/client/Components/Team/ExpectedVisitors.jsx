import React from "react";
import { useEffect, useState } from "react";
import TeamHeader from "./TeamHeader";
const url = "http://localhost:3030/bookings/locationId";

function ExpectedVisitors({ staffInfo }) {
  const [clientBookings, setClientBookings] = useState();

  const getClientBookings = async () => {
    try {
      if (staffInfo) {
        console.log("this is staff Infor", staffInfo);
        const result = await fetch(`${url}/${staffInfo?.locationId}`);
        const bookings = await result.json();
        setClientBookings(bookings);

        console.log("this is bookings", bookings);
        return bookings;
      }
    } catch (err) {
      console.error("Error fetching bookings:", err);
      throw new Error("Failed to fetch bookings");
    }
  };

  useEffect(() => {
    getClientBookings();
  }, [staffInfo]);

  return (
    <section>
        <TeamHeader/>
      <div>
        <p>This is the visitors coming today</p>
      </div>
    </section>
  );
}

export default ExpectedVisitors;
