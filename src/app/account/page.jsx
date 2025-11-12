import Link from 'next/link';
import { headers } from 'next/headers';
import { createClient } from '@/server/supabase/serverClient';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function Account() {
  const supabase = await createClient();
  // Server Action: logout
  async function logout() {
    'use server';
    const supabase = await createClient();
    await supabase.auth.signOut();
    redirect('/');
  }

  // ✅ Fetch user session server-side
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return (
      <div className="container-xxl py-5 bg-primary hero-header mb-5">
        <div className="container my-5 py-5 px-lg-5 text-center text-white">
          <h1 className="animated zoomIn">Please Login or Sign Up</h1>
          <Link href="/login">
            <button className="btn btn-light me-2">Login / Sign Up</button>
          </Link>
        </div>
      </div>
    );
  }

  // ✅ Fetch bookings server-side (build absolute origin from incoming request)
  const h = await headers();
  const protocol = h.get('x-forwarded-proto') || 'https';
  const host = h.get('host') || 'localhost:3000';
  const origin = `${protocol}://${host}`;
  const bookingsRes = await fetch(`${origin}/api/bookings`, { cache: 'no-store' });
  const bookings = bookingsRes.ok ? await bookingsRes.json() : [];

  return (
    <div>
      <div className="container-xxl py-5 bg-primary hero-header mb-5">
        <div className="container my-5 py-5 px-lg-5">
          <div className="row g-5 py-5">
            <div className="col-12 text-center">
              <h1 className="text-white animated zoomIn">My Account</h1>
              <hr className="bg-white mx-auto mt-0" style={{ width: '90px' }} />
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <Link className="text-white" href="/">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Account
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-lg-5">
        <div className="row">
          <div className="col-md-6">
            <h4>Profile Information</h4>
            <p>Name: {user.user_metadata?.name || 'N/A'}</p>
            <p>Email: {user.email}</p>
            <div className="mt-3 d-flex gap-2">
              <Link href="/player" className="btn btn-primary">Register as Player</Link>
              <form action={logout}>
                <button type="submit" className="btn btn-outline-secondary">Logout</button>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <h4>My Bookings</h4>
            {bookings.length === 0 ? (
              <p>No bookings found.</p>
            ) : (
              <table className="table">
                <thead>
                  <tr>
                    <th>Arena</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((b) => (
                    <tr key={b.id}>
                      <td>{b.arenaName}</td>
                      <td>{b.date}</td>
                      <td>{b.timeSlot}</td>
                      <td>{b.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
