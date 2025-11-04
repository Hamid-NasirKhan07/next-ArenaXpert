"use client"

import React, { useState } from 'react';

export default function Transactions() {
  const [transactions, setTransactions] = useState([
    { id: 1, name: 'Ali Raza', via: 'jazz cash', amount: 1700 },
    { id: 2, name: 'Zeeshan', via: 'easy paisa', amount: 2000 },
    { id: 3, name: 'Zain', via: 'Meezan Bank', amount: 1500 },
    { id: 4, name: 'Hamid Nasir Khan', via: 'Allied Bank', amount: 1800 },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    via: '',
    amount: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddTransaction = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.via || !formData.amount) {
      alert('Please fill all fields');
      return;
    }
    const newTransaction = {
      id: transactions.length + 1,
      name: formData.name,
      via: formData.via,
      amount: Number(formData.amount),
    };
    setTransactions(prev => [...prev, newTransaction]);
    setFormData({ name: '', via: '', amount: '' });
  };

  return (
    <div>
      <div className="dashboard-ecommerce">
        <div className="container-fluid dashboard-content ">
          {/* Page header */}
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="page-header">
                <h2 className="pageheader-title">All Transactions</h2>
                <div className="page-breadcrumb">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Transactions</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          {/* Add Transaction Form */}
          <div className="row mb-4">
            <div className="col-12">
              <form onSubmit={handleAddTransaction} className="form-inline">
                <div className="form-group mr-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group mr-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Transaction Via"
                    name="via"
                    value={formData.via}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group mr-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">Add Transaction</button>
              </form>
            </div>
          </div>

          {/* Transaction Table */}
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="card">
                <h5 className="card-header">All Transactions List</h5>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table">
                      <thead className="bg-light">
                        <tr className="border-0">
                          <th className="border-0">Name</th>
                          <th className="border-0">Transaction via</th>
                          <th className="border-0">Total Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {transactions.map(tx => (
                          <tr key={tx.id}>
                            <td>{tx.name}</td>
                            <td>{tx.via}</td>
                            <td>Rs {tx.amount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
