import React, { useEffect, useState, useContext } from "react";
import TeamHeader from "./TeamHeader";
import { formContext } from "../../App";
import SideBar from "./SideBar.jsx";
import "./Dashboard.css";
import DashboardHead from "./DashboardHead.jsx";

const url = "http://localhost:3030/bookings/locationId";

function ExpectedVisitors() {
  const { staffInfo, setStaffInfo } = useContext(formContext);
  const [clientBookings, setClientBookings] = useState(() => {
    const storedBookings = sessionStorage.getItem("clientBookings");
    return storedBookings ? JSON.parse(storedBookings) : [];
  });

  const getClientBookings = async () => {
    try {
      if (staffInfo) {
        const result = await fetch(`${url}/${staffInfo?.locationId}`);
        const { bookings } = await result.json();

        sessionStorage.setItem("clientBookings", JSON.stringify(bookings));
        console.log("this is the new bookings", bookings);
        setClientBookings(bookings);
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
    <section className="dashboard">
      <DashboardHead  staffInfo={staffInfo} setStaffInfo={setStaffInfo} />
      <SideBar clientBookings={clientBookings} />
      <div className="main_dashboard">
        {clientBookings?.map((booking) => (
          <div key={booking.id}>
            <p>{booking.printName}</p>
            <p>{booking.bookingfor}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExpectedVisitors;
