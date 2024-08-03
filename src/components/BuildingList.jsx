import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

const BuildingList = ({ reload }) => {
    const [buildings, setBuildings] = useState([]);
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/building');
            setData(response.data);
            setFilteredData(response.data);
            setBuildings(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData(); // Fetch data whenever the reload prop changes
    }, [reload]);

    useEffect(() => {
        const filtered = buildings.filter(item =>
            item.building_name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredData(filtered);
    }, [search, buildings]);

    const columns = [
        { name: 'ID', selector: row => row.id, sortable: true }, // Adjust field names as necessary
        { name: 'Name', selector: row => row.building_name, sortable: true },
        { name: 'Location', selector: row => row.building_location, sortable: true },
        { name: 'No', selector: row => row.building_no, sortable: true },
        { name: 'Road', selector: row => row.building_road, sortable: true },
        { name: 'Area', selector: row => row.building_area, sortable: true },
        { name: 'Postal Code', selector: row => row.building_zip, sortable: true },
        { name: 'Total floors', selector: row => row.total_floors, sortable: true },
        { name: 'Manager Name', selector: row => row.manager_name, sortable: true },
        { name: 'Contact', selector: row => row.manager_contact, sortable: true },
        // Add more columns as needed
    ];
// Update by Stephy OK Fine Changhes Commited 
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
                    <h5 className="card-header text-md-start text-center">Building List</h5>
                </div>
                <div className="col-md-3 pt-5" style={{ padding: "10px" }}>
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
    )
};

export default BuildingList;
