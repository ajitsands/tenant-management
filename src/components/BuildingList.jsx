import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

const UserList = ({ reload }) => {
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

    // Column definitions
    const columns = [
        { name: 'ID', selector: row => row.ids, sortable: true },
        { name: 'Name', selector: row => row.names, sortable: true },
        { name: 'User Name', selector: row => row.user_name, sortable: true },
        { name: 'User Type', selector: row => row.user_type, sortable: true },
        { name: 'Email', selector: row => row.email, sortable: true },
        { name: 'Contact No', selector: row => row.contact_no, sortable: true },
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
