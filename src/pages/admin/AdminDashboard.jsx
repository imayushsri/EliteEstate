import React, { useState } from 'react';
import { FaEdit, FaTrashAlt, FaEye, FaEyeSlash } from 'react-icons/fa';
import EditPropertyModal from '../../components/admin/EditPropertyModal';
import { Link } from 'react-router-dom';

const mockProperties = [
  {
    id: 1,
    title: 'Luxury Villa',
    location: 'Beverly Hills, LA',
    status: 'sale',
    price: '$500,000',
    description: 'A beautiful luxury villa with private pool and garden.',
    image: 'https://images.pexels.com/photos/3288104/pexels-photo-3288104.png'
  },
  {
    id: 2,
    title: '2BHK Apartment',
    location: 'Manhattan, NYC',
    status: 'rent',
    price: '$1,200/mo',
    description: 'Spacious apartment in the heart of the city.',
    image: 'https://images.pexels.com/photos/3288104/pexels-photo-3288104.png'
  }
];

const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', blocked: false },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', blocked: true }
];

export default function AdminDashboard() {
  const [tab, setTab] = useState('properties');
  const [properties, setProperties] = useState(mockProperties);
  const [users, setUsers] = useState(mockUsers);
  const [selectedProperty, setSelectedProperty] = useState(null);


  const mainPink = '#fb246a';
  const mainBlue = '#0056b3';
  const pinkSoft = '#fb246a22';
  const blueSoft = '#0056b322';

  return (
    <>
      <EditPropertyModal selectedProperty={selectedProperty} />
      <div className="container-fluid mt-5 pt-5">
        <div className="row">
          <h1 className="text-center" style={{ color: mainBlue }}>Admin Dashboard</h1>
          <div className="col-md-2 p-3 mt-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <button
                  className="nav-link btn w-100"
                  style={{
                    color: mainPink,
                    border: tab === 'properties' ? `1px solid ${mainPink}` : `1px solid transparent`
                  }}
                  onClick={() => setTab('properties')}
                >
                  Listed Properties
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn w-100"
                  style={{
                    color: mainPink,
                    border: tab === 'users' ? `1px solid ${mainPink}` : `1px solid transparent`
                  }}
                  onClick={() => setTab('users')}
                >
                  Users
                </button>
              </li>
            </ul>
          </div>

          <div className="col-md-10 p-4">

            {tab === 'properties' && (
              <div className="card shadow">
                <div className="card-body">
                  <div className="mb-3 text-end">
                    <Link to="/admin/add-property">
                    <button className="btn" style={{ backgroundColor: mainPink, color: 'white' }}>
                      Add New Property
                    </button>
                    </Link>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-bordered align-middle">
                      <thead style={{ backgroundColor: pinkSoft }}>
                        <tr>
                          <th>Image</th>
                          <th>Title</th>
                          <th>Location</th>
                          <th>Status</th>
                          <th>Price</th>
                          <th>Description</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {properties.map(property => (
                          <tr key={property.id}>
                            <td>
                              <img src={property.image} alt={property.title} width="100" />
                            </td>
                            <td>{property.title}</td>
                            <td>{property.location}</td>
                            <td>{property.status}</td>
                            <td>{property.price}</td>
                            <td style={{ maxWidth: '200px' }}>{property.description}</td>
                            <td>
                              <button
                                className="btn btn-sm me-2 mb-2"
                                style={{ borderColor: mainBlue, color: mainBlue }}
                                data-bs-toggle="modal"
                                data-bs-target="#editModal"
                                onClick={() => setSelectedProperty(property)}
                              >
                                <FaEdit />
                              </button>
                              <button
                                className="btn btn-sm mb-2"
                                style={{ backgroundColor: mainPink, color: 'white' }}
                              >
                                <FaTrashAlt />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

            )}

            {tab === 'users' && (
              <div className="card shadow">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead style={{ backgroundColor: blueSoft }}>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map(user => (
                          <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.blocked ? 'Blocked' : 'Active'}</td>
                            <td>
                              <button
                                className="btn btn-sm"
                                style={{ borderColor: mainPink, color: mainPink }}
                              >
                                {user.blocked ? <FaEye /> : <FaEyeSlash />}
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                </div>
              </div>

            )}

          </div>
        </div>
      </div>
    </>
  );
}
