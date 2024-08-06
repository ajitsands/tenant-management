// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import DataTable from 'react-data-table-component';
// import { FaEdit, FaTrash } from 'react-icons/fa';

// const UserList = ({ reload }) => {
//     const [users, setUsers] = useState([]);
//     const [search, setSearch] = useState('');
//     const [filteredData, setFilteredData] = useState([]);

    
//     const fetchData = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/user');
//             setUsers(response.data);
//             setFilteredData(response.data); 
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

   
//     useEffect(() => {
//         fetchData();
//     }, [reload]);

   
//     useEffect(() => {
//         const filtered = users.filter(item =>
//             item.names.toLowerCase().includes(search.toLowerCase())
//         );
//         setFilteredData(filtered);
//     }, [search, users]);

   
//     const columns = [
//         { name: 'ID', selector: row => row.ids, sortable: true },
//         { name: 'Name', selector: row => row.names, sortable: true },
//         { name: 'User Name', selector: row => row.user_name, sortable: true },
//         { name: 'User Type', selector: row => row.user_type, sortable: true },
//         { name: 'Email', selector: row => row.email, sortable: true },
//         { name: 'Contact No', selector: row => row.contact_no, sortable: true },
//         {
//           name: 'Actions',
//           cell: (row) => (
//               <div>
//                   <FaEdit onClick={() => handleEdit(row)} style={{ cursor: 'pointer', marginRight: '10px' }} />
//                   {/* <FaTrash onClick={() => handleDelete(row)} style={{ cursor: 'pointer' }} /> */}
//               </div>
//           ),
//           ignoreRowClick: true,
//           allowOverflow: true,
//           button: true,
//       },
//     ];

   
//     const customStylesOfTheTable = {
//         header: {
//             style: {
//                 minHeight: '56px',
//                 backgroundColor: '#f5f5f5',
//             },
//         },
//         headRow: {
//             style: {
//                 backgroundColor: '#e9ecef',
//             },
//         },
//         rows: {
//             style: {
//                 minHeight: '50px',
//             },
//             stripedStyle: {
//                 backgroundColor: '#f2f2f2',
//             },
//         },
//         cells: {
//             style: {
//                 paddingLeft: '8px',
//                 paddingRight: '8px',
//             },
//         },
//     };

//     return (
//         <div className="card">
//             <div className="row">
//                 <div className="col-md-9">
//                     <h5 className="card-header text-md-start text-center">User List</h5>
//                 </div>
//                 <div className="col-md-3 pt-5" style={{ padding: '10px' }}>
//                     <input
//                         type="text"
//                         placeholder="Search..."
//                         value={search}
//                         onChange={(e) => setSearch(e.target.value)}
//                         style={{ marginBottom: '30px', padding: '10px', width: '90%' }}
//                     />
//                 </div>
//             </div>
//             <DataTable
//                 columns={columns}
//                 data={filteredData} 
//                 customStyles={customStylesOfTheTable}
//                 pagination
//                 highlightOnHover
//                 striped
//             />
//         </div>
//     );
// };

// export default UserList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2'

const UserList = ({ reload, onEdit, onDelete }) => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    // Fetch data from the server
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/user');
            setUsers(response.data);
            setFilteredData(response.data); // Set filteredData initially to all users
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Fetch data when the component mounts or reload prop changes
    useEffect(() => {
        fetchData();
    }, [reload]);

    // Filter data based on search input
    useEffect(() => {
        const filtered = users.filter(item =>
            item.names.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredData(filtered);
    }, [search, users]);

    const handleEdit = (row) => {
        onEdit(row);
    };

    // const handleDelete = (row) => {
    //     onDelete(row);
    // };
    const handleDelete = async (id) => {
        // Show confirmation dialog
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel'
        });
    
        if (result.isConfirmed) {
            try {
                // Perform the delete request
                await axios.delete(`http://localhost:5000/api/user/${id}`);
                fetchData();
                
                // Show success message
                Swal.fire(
                    'Deleted!',
                    'The item has been deleted.',
                    'success'
                );
            } catch (error) {
                console.error('Failed to delete row:', error);
                Swal.fire(
                    'Error!',
                    'There was an error deleting the item.',
                    'error'
                );
            }
        } else {
            Swal.fire(
                'Cancelled',
                'The item was not deleted.',
                'info'
            );
        }
    };
    

    
    const columns = [
        {
            name: 'S.No',
            selector: (row, index) => index + 1,
            sortable: false,
            width: '60px',
            center:true,
        },
        { name: 'Name', selector: row => row.names, sortable: true,justify:true},
        { name: 'User Name', selector: row => row.user_name, sortable: true,justify:true },
        { name: 'User Type', selector: row => row.user_type, sortable: true,justify:true },
        { name: 'Email', selector: row => row.email, sortable: true,justify:true },
        { name: 'Contact No', selector: row => row.contact_no, sortable: true,justify:true },
        {
          name: 'Actions',
          cell: (row) => (
              <div>
                  <FaEdit onClick={() => handleEdit(row)} style={{ cursor: 'pointer', marginRight: '10px' }} />
                  <FaTrash onClick={() => handleDelete(row.ids)} style={{ cursor: 'pointer' }} />
              </div>
          ),
          ignoreRowClick: true,
          allowOverflow: true,
          button: true,
      },
    ];

    // Custom styles for the DataTable
    const customStylesOfTheTable = {
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
            <DataTable
                columns={columns}
                data={filteredData} // Use filteredData instead of data
                customStyles={customStylesOfTheTable}
                pagination
                highlightOnHover
                striped
            />
        </div>
    );
};

export default UserList;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import DataTable from 'react-data-table-component';
// import { FaEdit, FaTrash } from 'react-icons/fa';
// import Swal from 'sweetalert2';

// const UserList = ({ reload, onEdit, onDelete }) => {
//     const [users, setUsers] = useState([]);
//     const [search, setSearch] = useState('');
//     const [filteredData, setFilteredData] = useState([]);
//     const [selectedRowId, setSelectedRowId] = useState(null);

//     // Fetch data from the server
//     const fetchData = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/user');
//             setUsers(response.data);
//             setFilteredData(response.data); // Set filteredData initially to all users
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     // Fetch data when the component mounts or reload prop changes
//     useEffect(() => {
//         fetchData();
//     }, [reload]);

//     // Filter data based on search input
//     useEffect(() => {
//         const filtered = users.filter(item =>
//             item.names.toLowerCase().includes(search.toLowerCase())
//         );
//         setFilteredData(filtered);
//     }, [search, users]);

//     // Handle edit action
//     const handleEdit = (row) => {
//         setSelectedRowId(row.ids); // Set the row ID to highlight
//         onEdit(row);
//     };

//     // Handle delete action with confirmation
//     const handleDelete = async (id) => {
//         const result = await Swal.fire({
//             title: 'Are you sure?',
//             text: "You won't be able to revert this!",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Yes, delete it!',
//             cancelButtonText: 'Cancel'
//         });

//         if (result.isConfirmed) {
//             try {
//                 await axios.delete(`http://localhost:5000/api/user/${id}`);
//                 fetchData();
//                 Swal.fire('Deleted!', 'The item has been deleted.', 'success');
//             } catch (error) {
//                 console.error('Failed to delete row:', error);
//                 Swal.fire('Error!', 'There was an error deleting the item.', 'error');
//             }
//         } else {
//             Swal.fire('Cancelled', 'The item was not deleted.', 'info');
//         }
//     };

//     const columns = [
//         {
//             name: 'S.No',
//             selector: (row, index) => index + 1,
//             sortable: false,
//             width: '60px',
//             center: true,
//         },
//         { name: 'Name', selector: row => row.names, sortable: true, justify: true },
//         { name: 'User Name', selector: row => row.user_name, sortable: true, justify: true },
//         { name: 'User Type', selector: row => row.user_type, sortable: true, justify: true },
//         { name: 'Email', selector: row => row.email, sortable: true, justify: true },
//         { name: 'Contact No', selector: row => row.contact_no, sortable: true, justify: true },
//         {
//             name: 'Actions',
//             cell: (row) => (
//                 <div>
//                     <FaEdit
//                         onClick={() => handleEdit(row)}
//                         style={{ cursor: 'pointer', marginRight: '10px' }}
//                     />
//                     <FaTrash
//                         onClick={() => handleDelete(row.ids)}
//                         style={{ cursor: 'pointer' }}
//                     />
//                 </div>
//             ),
//             ignoreRowClick: true,
//             allowOverflow: true,
//             button: true,
//         },
//     ];

//     // Custom styles for the DataTable
//     const customStylesOfTheTable = {
//         header: {
//             style: {
//                 minHeight: '56px',
//                 backgroundColor: '#f5f5f5',
//             },
//         },
//         headRow: {
//             style: {
//                 backgroundColor: '#e9ecef',
//             },
//         },
//         rows: {
//             style: {
//                 minHeight: '50px',
//             },
//             stripedStyle: {
//                 backgroundColor: '#f2f2f2',
//             },
//         },
//         cells: {
//             style: {
//                 paddingLeft: '8px',
//                 paddingRight: '8px',
//             },
//         },
//     };

//     return (
//         <div className="card">
//             <div className="row">
//                 <div className="col-md-9">
//                     <h5 className="card-header text-md-start text-center">User List</h5>
//                 </div>
//                 <div className="col-md-3 pt-5" style={{ padding: '10px' }}>
//                     <input
//                         type="text"
//                         placeholder="Search..."
//                         value={search}
//                         onChange={(e) => setSearch(e.target.value)}
//                         style={{ marginBottom: '30px', padding: '10px', width: '90%' }}
//                     />
//                 </div>
//             </div>
//             <DataTable
//                 columns={columns}
//                 data={filteredData}
//                 customStyles={customStylesOfTheTable}
//                 pagination
//                 highlightOnHover
//                 striped
//                 conditionalRowStyles={[
//                     {
//                         when: row => row.ids === selectedRowId,
//                         style: {
//                             backgroundColor: 'red',
//                             color: 'white',
//                         },
//                     },
//                 ]}
//             />
//         </div>
//     );
// };

// export default UserList;


