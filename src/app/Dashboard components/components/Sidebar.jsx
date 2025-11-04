import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faFortAwesome } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link'
export default function Sidebar() {
  return (
    <div>
       {/* <!-- left sidebar --> */}
        <div className="nav-left-sidebar sidebar-dark">
            <div className="menu-list">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link href="/dashboard" className="d-xl-none d-lg-none">Dashboard</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav flex-column">
                            <li className="nav-divider">
                                Menu
                            </li>
                            <li className="nav-item ">
                                <Link href="/dashboard"  className="nav-link"><i className="fa fa-fw fa-user-circle"></i>Dashboard</Link>
                            </li>
                            <li className="nav-item ">
                                <Link href="/transactions"  className="nav-link" style={{marginLeft:'2px'}}><FontAwesomeIcon icon={faSackDollar}/><span style={{marginLeft:'11px'}}>Transactions</span></Link>
                            </li>
                            <li className="nav-item ">
                                <Link href="/customers"  className="nav-link" style={{marginLeft:'1px'}}><FontAwesomeIcon icon={faUsers}/><span style={{marginLeft:'10px'}}>Customers</span></Link>
                            </li>
                            <li className="nav-item ">
                                <Link href="/booking"  className="nav-link" style={{marginLeft:'3px'}}><FontAwesomeIcon icon={faCalendarDays}/><span style={{marginLeft:'14px'}}>Bookings</span></Link>
                            </li>
                            <li className="nav-item ">
                                <Link  className="nav-link" href="#" style={{marginLeft:'2px'}}><FontAwesomeIcon icon={faFortAwesome}/><span style={{marginLeft:'11px'}}>Arena Managment</span></Link>
                            </li>
                    
                  
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
  )
}
