import React, { useEffect, useState, useContext } from "react";
import TeamHeader from "./TeamHeader";
import { formContext } from "../../App";
import SideBar from "./SideBar.jsx";
import "./Dashboard.css";
import DashboardHead from "./DashboardHead.jsx";

const url = "http://localhost:3030/bookings/location";

function ExpectedVisitors() {
  const { staffInfo, setStaffInfo } = useContext(formContext);
  const [clientBookings, setClientBookings] = useState([])

  const getClientBookings = async () => {
    try {
      if (staffInfo) {
        const result = await fetch(`${url}/${staffInfo?.locationId}`);
        const { bookings } = await result.json();
        setClientBookings(bookings);
      }
    } catch (err) {
      console.error("Error fetching bookings:", err);
      throw new Error("Failed to fetch bookings");
    }
  };

  useEffect(() => {
    getClientBookings();
  }, [staffInfo]);

  useEffect(()=>{
    console.log('This is my client bookings', clientBookings)
  },[clientBookings] )

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
