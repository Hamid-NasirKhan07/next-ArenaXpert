"use client"

import React, { useEffect } from 'react';
import { initProductSalesChart, initProductCategoryChart, initCustomerAcquisitionChart, initGoodServiceChart, initTotalRevenueChart } from '../libs/chartist-charts';
import { initializeC3Chart } from '../libs/dashboard-ecommerce.js';

export default function Dashboard() {
    useEffect(() => {
        // Initialize charts after the component is mounted
        initProductSalesChart();
        initProductCategoryChart();
        initCustomerAcquisitionChart();
        initGoodServiceChart();
        initTotalRevenueChart();
        initializeC3Chart();
    }, []);

    return (
        <div>
            <div className="dashboard-ecommerce">
                <div className="container-fluid dashboard-content ">
                    {/* <!-- pageheader  --> */}
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="page-header">
                                <h2 className="pageheader-title">Overview </h2>
                                <div className="page-breadcrumb">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <a href="#" className="breadcrumb-link">Dashboard</a>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Overview
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end pageheader  --> */}
                    <div className="ecommerce-widget">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="text-muted">Total Revenue</h5>
                                        <div className="metric-value d-inline-block">
                                            <h1 className="mb-1">63,000</h1>
                                        </div>
                                        <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                                            <span>
                                                <i className="fa fa-fw fa-arrow-up"></i>
                                            </span>
                                            <span>5.86%</span>
                                        </div>
                                    </div>
                                    <div id="sparkline-revenue"></div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="text-muted">Total Users</h5>
                                        <div className="metric-value d-inline-block">
                                            <h1 className="mb-1">456</h1>
                                        </div>
                                        <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                                            <span>
                                                <i className="fa fa-fw fa-arrow-up"></i>
                                            </span>
                                            <span>5.86%</span>
                                        </div>
                                    </div>
                                    <div id="sparkline-revenue2"></div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="text-muted">Active Customers</h5>
                                        <div className="metric-value d-inline-block">
                                            <h1 className="mb-1">321</h1>
                                        </div>
                                        <div className="metric-label d-inline-block float-right text-danger font-weight-bold">
                                            <span>
                                                <i className="fa fa-fw fa-arrow-down"></i>
                                            </span>
                                            <span>5.86%</span>
                                        </div>
                                    </div>
                                    <div id="sparkline-revenue3"></div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="text-muted">Profit</h5>
                                        <div className="metric-value d-inline-block">
                                            <h1 className="mb-1">45,000</h1>
                                        </div>
                                        <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                                            <span>
                                                <i className="fa fa-fw fa-arrow-up"></i>
                                            </span>
                                            <span>1.05%</span>
                                        </div>
                                    </div>
                                    <div id="sparkline-revenue4"></div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <h5 className="card-header">
                                        Profit{' '}
                                        <span className="float-right">Jan to Apr 2025</span>
                                    </h5>
                                    <div className="card-body">
                                        <div id="goodservice"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                {/* <!-- top perfomimg  --> */}
                                <div className="card">
                                    <h5 className="card-header">Transaction</h5>
                                    <div className="card-body p-0">
                                        <div className="table-responsive">
                                            <table className="table no-wrap p-table">
                                                <thead className="bg-light">
                                                    <tr className="border-0">
                                                        <th className="border-0">Name</th>
                                                        <th className="border-0">Transaction via</th>
                                                        <th className="border-0">Total Amount</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Ali Raza</td>
                                                        <td>jazz cash </td>
                                                        <td>Rs 1700</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Zeeshan</td>
                                                        <td>easy paisa </td>
                                                        <td>Rs 2000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Zain</td>
                                                        <td>Meezan Bank </td>
                                                        <td>Rs 1500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Hamid Nasir Khan</td>
                                                        <td>Allied Bank</td>
                                                        <td>Rs 1800</td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan="3">
                                                            <a href="#" className="btn btn-outline-light float-right">
                                                                Details
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end top perfomimg  --> */}
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            {/* <!-- total revenue  --> */}

                            {/* <!-- end category revenue  --> */}

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <h5 className="card-header"> Total Revenue</h5>
                                    <div className="card-body">
                                        <div id="morris_totalrevenue"></div>
                                    </div>
                                    <div className="card-footer">
                                        <p className="display-7 font-weight-bold">
                                            <span className="text-primary d-inline-block">Rs 15000</span>
                                            <span className="text-success float-right">+9.45%</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <h5 className="card-header">My Location</h5>
                                    <div className="card-body">
                                        <div id="map" className="gmaps"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
