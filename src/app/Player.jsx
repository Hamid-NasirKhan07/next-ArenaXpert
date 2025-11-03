"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import LoginModal from '../components/LoginModal';

const cricketSpecialities = ['Batsman', 'Bowler', 'Allrounder'];
const footballSpecialities = ['Forward', 'Midfielder', 'Defender', 'Goalkeeper'];
const badmintonSpecialities = ['Singles', 'Doubles', 'Mixed Doubles'];

export default function Player() {
  const [sport, setSport] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [description, setDescription] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [emailState, setEmailState] = useState('');
  const [registeredPlayer, setRegisteredPlayer] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
      setEmailState(userData.email || '');
    }
  }, []);
  // NOTE: removed automatic GET to fetch player by email. We now only
  // read the logged-in user's email from localStorage and rely on the
  // explicit Register/Save actions to call POST/PUT. This prevents an
  // automatic GET from firing when the user clicks Save; Save will use
  // the PUT handler to push data to the DB.

  const getSpecialities = () => {
    switch (sport) {
      case 'cricket':
        return cricketSpecialities;
      case 'football':
        return footballSpecialities;
      case 'badminton':
        return badmintonSpecialities;
      default:
        return [];
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting player data with email:', emailState);
    const playerData = {
      email: emailState,
      sport,
      displayName,
      speciality,
      description,
      contactNumber,
    };
    console.log('Player data:', playerData);
    try {
  const response = await fetch('/api/player/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(playerData),
      });
      if (response.ok) {
        const data = await response.json();
        alert('Player registered successfully!');
        setRegisteredPlayer(data.player);
        setIsEditing(false);
        // Reset form fields
        setSport('');
        setDisplayName('');
        setSpeciality('');
        setDescription('');
        setContactNumber('');
      } else {
        const errorData = await response.json();
        alert('Error: ' + errorData.error);
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  const handleEditClick = () => {
    if (registeredPlayer) {
      setSport(registeredPlayer.sport);
      setDisplayName(registeredPlayer.displayName);
      setSpeciality(registeredPlayer.speciality);
      setDescription(registeredPlayer.description);
      setContactNumber(registeredPlayer.contactNumber);
      setIsEditing(true);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!registeredPlayer) return;
    const updatedData = {
      email: emailState,
      sport,
      displayName,
      speciality,
      description,
      contactNumber,
    };
    try {
  const response = await fetch(`/api/player/${encodeURIComponent(emailState)}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
      if (response.ok) {
        const data = await response.json();
        alert('Player info updated successfully!');
        setRegisteredPlayer(data);
        setIsEditing(false);
        // Clear form fields
        setSport('');
        setDisplayName('');
        setSpeciality('');
        setDescription('');
        setContactNumber('');
      } else {
        const errorData = await response.json();
        alert('Error: ' + errorData.error);
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  if (!user) {
    return (
      <>
        <div className="container-xxl py-5 bg-primary hero-header mb-5">
          <div className="container my-5 py-5 px-lg-5 text-center text-white">
            <h1 className="animated zoomIn">Please Login or Sign Up</h1>
            <button className="btn btn-light me-2" onClick={() => setShowLoginModal(true)}>Login / Sign Up</button>
          </div>
        </div>
        <LoginModal show={showLoginModal} onClose={() => setShowLoginModal(false)} />
      </>
    );
  }

  return (
    <div>
      <div className="container-xxl py-5 bg-primary hero-header mb-5">
        <div className="container my-5 py-5 px-lg-5">
          <div className="row g-5 py-5">
            <div className="col-12 text-center">
              <h1 className="text-white animated zoomIn">Register as a Player</h1>
              <hr className="bg-white mx-auto mt-0" style={{ width: '90px' }} />
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <Link className="text-white" href="/">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Player
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-lg-5">
        {!registeredPlayer || isEditing ? (
          <form onSubmit={isEditing ? handleUpdate : handleSubmit}>
            <div className="mb-3">
              <label htmlFor="sport" className="form-label">Select Sport</label>
              <select
                id="sport"
                className="form-select"
                value={sport}
                onChange={(e) => {
                  setSport(e.target.value);
                  setSpeciality(''); // reset speciality on sport change
                }}
                required
              >
                <option value="">-- Select Sport --</option>
                <option value="cricket">Cricket</option>
                <option value="football">Football</option>
                <option value="badminton">Badminton</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="displayName" className="form-label">Display Name</label>
              <input
                type="text"
                id="displayName"
                className="form-control"
                value={displayName || ''}
                onChange={(e) => setDisplayName(e.target.value)}
                required
                placeholder="Enter your display name"
              />
            </div>

            {sport && (
              <div className="mb-3">
                <label htmlFor="speciality" className="form-label">Select Speciality</label>
              <select
                id="speciality"
                className="form-select"
                value={speciality || ''}
                onChange={(e) => setSpeciality(e.target.value)}
                required
              >
                  <option value="">-- Select Speciality --</option>
                {getSpecialities().map((spec, index) => (
                  <option key={spec + index} value={spec.toLowerCase()}>
                    {spec}
                  </option>
                ))}
                </select>
              </div>
            )}

            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea
                id="description"
                className="form-control"
                value={description || ''}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                placeholder="Describe yourself"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={emailState || ''}
                readOnly
                disabled
                placeholder="Email is fetched from your account"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="contactNumber" className="form-label">Contact Number</label>
              <input
                type="tel"
                id="contactNumber"
                className="form-control"
                value={contactNumber || ''}
                onChange={(e) => setContactNumber(e.target.value)}
                placeholder="Enter your contact number"
              />
            </div>

            <button type="submit" className="btn btn-primary">{isEditing ? 'Save' : 'Register'}</button>
            {isEditing && (
              <button
                type="button"
                className="btn btn-secondary ms-2"
                onClick={() => {
                  setIsEditing(false);
                  setRegisteredPlayer(null);
                  setSport('');
                  setDisplayName('');
                  setSpeciality('');
                  setDescription('');
                  setContactNumber('');
                }}
              >
                Cancel
              </button>
            )}
          </form>
        ) : (
          <div>
            <h3>Registration Info</h3>
            <p><strong>Sport:</strong> {registeredPlayer.sport}</p>
            <p><strong>Display Name:</strong> {registeredPlayer.displayName}</p>
            <p><strong>Speciality:</strong> {registeredPlayer.speciality}</p>
            <p><strong>Description:</strong> {registeredPlayer.description}</p>
            <p><strong>Contact Number:</strong> {registeredPlayer.contactNumber}</p>
            <button className="btn btn-primary" onClick={handleEditClick}>Edit</button>
          </div>
        )}
      </div>
    </div>
  );
}
