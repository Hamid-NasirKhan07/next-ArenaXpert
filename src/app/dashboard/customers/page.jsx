
export default function Customers() {
  return (
    <div>
       <div className="dashboard-ecommerce">
                <div className="container-fluid dashboard-content ">
                    {/* <!-- pageheader  --> */}
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="page-header">
                                <h2 className="pageheader-title">All Customers </h2>
                                <div className="page-breadcrumb">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">Customers</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                                          {/* <!-- Transaction Table  --> */}
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="card">
                                    <h5 className="card-header">All Customers List</h5>
                                    <div className="card-body p-0">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead className="bg-light">
                                                    <tr className="border-0">
                                                        <th className="border-0">Customer ID#</th>
                                                        <th className="border-0">Name </th>
                                                        <th className="border-0">Phone #</th>
                                                        <th className="border-0">Email</th>
                                                        <th className="border-0">Total Bookings</th>
                                                        <th className="border-0">Total Spend</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>
                                                            <div className="m-r-10"><img src="/img/team-1.jpg" alt="user" className="rounded" width="45"/></div>
                                                        </td>
                                                        <td>+92 300 0000000 </td>
                                                        <td>user1@example.com </td>
                                                        <td>20</td>
                                                        <td>Rs 80,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>
                                                            <div className="m-r-10"><img src="/img/team-2.jpg" alt="user" className="rounded" width="45"/></div>
                                                        </td>
                                                        <td>+92 311 1111111 </td>
                                                        <td>user2@example.com </td>
                                                        <td>12</td>
                                                        <td>Rs 180,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>
                                                            <div className="m-r-10"><img src="/img/team-3.jpg" alt="user" className="rounded" width="45"/></div>
                                                        </td>
                                                        <td>+92 322 2222222 </td>
                                                        <td>user3@example.com </td>
                                                        <td>23</td>
                                                        <td>Rs 820,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>
                                                            <div className="m-r-10"><img src="/img/testimonial-4.jpg" alt="user" className="rounded" width="45"/></div>
                                                        </td>
                                                        <td>+92 333 3333333 </td>
                                                        <td>user4@example.com </td>
                                                        <td>34</td>
                                                        <td>Rs 340,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan="9"><a href="#" className="btn btn-outline-light float-right">View Details</a></td>
                                                    </tr>
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
  )
}
