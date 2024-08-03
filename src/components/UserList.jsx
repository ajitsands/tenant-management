// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const UserList = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/user');
//         setUsers(response.data);
//       } catch (error) {
//         console.error('There was an error fetching the user data!', error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <div className="card mb-6">
//       <div className="card-body">
//         <h6>User List</h6>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Contact Number</th>
//               <th>User Type</th>
//               <th>User Name</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user.ids}>
//                 <td>{user.names}</td>
//                 <td>{user.email}</td>
//                 <td>{user.contact_no}</td>
//                 <td>{user.user_type}</td>
//                 <td>{user.user_name}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };


// export default UserList;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import DataTable from 'react-data-table-component';

// function UserDatatable() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState('');
//   const [filteredData, setFilteredData] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/user')
//       .then(response => {
//         setUsers(response.data);
//         setFilteredData(response.data); // Initialize filteredData with the response data
//         setLoading(false);
//       })
//       .catch(error => {
//         console.log(error.response);
//         setLoading(false);
//       });
//   }, []);

//   useEffect(() => {
//     const filtered = users.filter(user =>
//       user.names.toLowerCase().includes(search.toLowerCase())
//     );
//     setFilteredData(filtered);
//   }, [search, users]);

//   const columns = [
//     {
//       name: 'S.No',
//       selector: (row, index) => index + 1,
//       sortable: false,
//       width: '5%',
//       center: true,
//     },
//     { 
//       name: 'Name', 
//       selector: row => row.names, 
//       sortable: true, 
//       center: true,
//       width: '20%',
//     },
//     { 
//       name: 'User Name', 
//       selector: row => row.user_name, 
//       sortable: true, 
//       center: true,
//       width: '20%',
//     },
//     { 
//       name: 'User Type', 
//       selector: row => row.user_type, 
//       sortable: true, 
//       center: true,
//       width: '15%',
//     },
//     { 
//       name: 'Email', 
//       selector: row => row.email, 
//       sortable: true, 
//       center: true,
//       width: '20%',
//     },
//     { 
//       name: 'Contact Number', 
//       selector: row => row.contact_no, 
//       sortable: true, 
//       center: true,
//       width: '20%',
//     },
//   ];


//   const customStyles = {
//     header: {
//       style: {
//         minHeight: '56px',
//         backgroundColor: '#f5f5f5',
//       },
//     },
//     headRow: {
//       style: {
//         backgroundColor: '#e9ecef',
//       },
//     },
//     rows: {
//       style: {
//         minHeight: '50px',
//       },
//       stripedStyle: {
//         backgroundColor: '#f2f2f2',
//       },
//     },
//     cells: {
//       style: {
//         paddingLeft: '8px',
//         paddingRight: '8px',
//       },
//     },
//   };

//   return (
//     <div className="card">
//       <div className="row">
//         <div className="col-md-9">
//           <h5 className="card-header text-md-start text-center">User List</h5>
//         </div>
//         <div className="col-md-3 pt-5" style={{ padding: '10px' }}>
//           <input
//             type="text"
//             placeholder="Search..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             style={{ marginBottom: '30px', padding: '10px', width: '90%' }}
//           />
//         </div>
//       </div>
//       <div className="card-datatable text-nowrap">
//         <DataTable
//           columns={columns}
//           data={filteredData}
//           customStyles={customStyles}
//           progressPending={loading}
//           pagination
//           highlightOnHover
//           striped
//         />
//       </div>
//     </div>
//   );
// }

// export default UserDatatable;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function UserDatatable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/user')
      .then(response => {
        setUsers(response.data);
        setFilteredData(response.data); // Initialize filteredData with the response data
        setLoading(false);
      })
      .catch(error => {
        console.log(error.response);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = users.filter(user =>
      user.names.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtered);
  }, [search, users]);

  const handleEdit = (id) => {
    // Handle edit logic here
    console.log(`Edit user with ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Handle delete logic here
    console.log(`Delete user with ID: ${id}`);
  };

  const columns = [
    {
      name: 'S.No',
      selector: (row, index) => index + 1,
      sortable: false,
      width: '5%',
      center: true,
    },
    { 
      name: 'Name', 
      selector: row => row.names, 
      sortable: true, 
      center: true,
      //width: '15%',
    },
    { 
      name: 'User Name', 
      selector: row => row.user_name, 
      sortable: true, 
      center: true,
      //width: '15%',
    },
    { 
      name: 'User Type', 
      selector: row => row.user_type, 
      sortable: true, 
      center: true,
      //width: '15%',
    },
    { 
      name: 'Email', 
      selector: row => row.email, 
      sortable: true, 
      center: true,
      //width: '15%',
    },
    { 
      name: 'Contact Number', 
      selector: row => row.contact_no, 
      sortable: true, 
      center: true,
      //width: '15%',
    },
    {
      name: 'Actions',
      cell: row => (
        <div style={{ textAlign: 'center' }}>
          <FontAwesomeIcon 
            icon={faEdit} 
            onClick={() => handleEdit(row.ids)} 
            style={{ cursor: 'pointer', marginRight: '10px' }} 
          />
          <FontAwesomeIcon 
            icon={faTrashAlt} 
            onClick={() => handleDelete(row.ids)} 
            style={{ cursor: 'pointer' }} 
          />
        </div>
      ),
      width: '20%',
      //center: true,
    },
  ];

  const customStyles = {
    header: {
      style: {
        minHeight: '56px',
        backgroundColor: '#f5f5f5',
      },
    },
    headRow: {
      style: {
        backgroundColor: '#e9ecef',
      },
    },
    rows: {
      style: {
        minHeight: '50px',
      },
      stripedStyle: {
        backgroundColor: '#f2f2f2',
      },
    },
    cells: {
      style: {
        paddingLeft: '8px',
        paddingRight: '8px',
      },
    },
  };

  return (
    <div className="card">
      <div className="row">
        <div className="col-md-9">
          <h5 className="card-header text-md-start text-center">User List</h5>
        </div>
        <div className="col-md-3 pt-5" style={{ padding: '10px' }}>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ marginBottom: '30px', padding: '10px', width: '90%' }}
          />
        </div>
      </div>
      <div className="card-datatable text-nowrap">
        <DataTable
          columns={columns}
          data={filteredData}
          customStyles={customStyles}
          progressPending={loading}
          pagination
          highlightOnHover
          striped
        />
      </div>
    </div>
  );
}

export default UserDatatable;













