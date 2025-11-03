"use client"

import React, { useState } from 'react';

export default function Booking() {
  const [arenaName, setArenaName] = useState('');
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchBookings = async (name) => {
    setLoading(true);
    setError('');
    try {
  const response = await fetch(`/api/bookings?arenaName=${encodeURIComponent(name)}`);
      if (response.ok) {
        const data = await response.json();
        setBookings(data);
      } else {
        setError('Failed to fetch bookings.');
      }
    } catch {
      setError('Error fetching bookings.');
    }
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (arenaName.trim() !== '') {
      fetchBookings(arenaName.trim());
    }
  };

  return (
    <div className="container mt-4">
      <h2>Search Bookings by Arena Name</h2>
      <form onSubmit={handleSearch} className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Arena Name"
          value={arenaName}
          onChange={(e) => setArenaName(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary mt-2">Search</button>
      </form>

      {loading && <p>Loading bookings...</p>}
      {error && <p className="text-danger">{error}</p>}

      {bookings.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>User</th>
              <th>Date</th>
              <th>Time Slot</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td>{booking._id}</td>
                <td>{booking.userName || booking.user}</td>
                <td>{booking.date}</td>
                <td>{booking.timeSlot}</td>
                <td>{booking.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !loading && <p>No bookings found for this arena.</p>
      )}
    </div>
  );
}
