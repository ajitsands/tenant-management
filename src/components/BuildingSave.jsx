import React, { useState, useEffect } from "react";
import axios from 'axios';
import DataTable from "react-data-table-component";

const BuildingSave = ({ editData, onSave }) => {
    const [building_name, setBuilding_name] = useState('');
    const [location, setLocation] = useState('');
    const [building_no, setBuilding_no] = useState('');
    const [building_road, setBuilding_road] = useState('');
    const [building_city, setBuilding_area] = useState('');
    const [building_zip, setBuilding_zip] = useState('');
    const [Total_floors, setTotal_floors] = useState('');  
    const [Manager_name, setManager_name] = useState('');
    const [Manager_contact, setManager_contact] = useState('');   

    // Use useEffect to load the data into the form when editData changes
    useEffect(() => {
        if (editData) {
            setBuilding_name(editData.building_name);
            setLocation(editData.building_location);
            setBuilding_no(editData.building_no);
            setBuilding_road(editData.building_road);
            setBuilding_area(editData.building_city);
            setBuilding_zip(editData.building_zip);
            setTotal_floors(editData.Total_floors);
            setManager_name(editData.Manager_name);
            setManager_contact(editData.Manager_contact);
        }
    }, [editData]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/building', {
                building_name,
                location,
                building_no,
                building_road,
                building_city,
                building_zip,
                Total_floors,
                Manager_name,
                Manager_contact
            });
            alert(response.data);
            onSave(); // Call the onSave function passed as prop to refresh the table
           
        } catch (error) {
            console.log(error);
        }
    };

    return (
      
        
 
        <div>
            <div className="card mb-6">
                <form className="card-body" onSubmit={handleSubmit}>
                    <h6>Building Details</h6>
                    <div className="row g-6">
                        <div className="col-md-3">
                            <div className="form-floating form-floating-outline">
                                <input
                                    type="text"
                                    id="txt_building_name"
                                    value={building_name}
                                    onChange={(e) => setBuilding_name(e.target.value)}
                                    name="building_name"
                                    className="form-control"
                                    placeholder="Name"
                                />
                                <label htmlFor="multicol-username">Name</label>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="input-group input-group-merge">
                                <div className="form-floating form-floating-outline">
                                    <input
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        type="text"
                                        id="txt_location"
                                        name="building_location"
                                        className="form-control"
                                        placeholder="Location"
                                        aria-label="Location"
                                    />
                                    <label htmlFor="multicol-email">Location</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="form-password-toggle">
                                <div className="input-group input-group-merge">
                                    <div className="form-floating form-floating-outline">
                                        <input
                                            type="password"
                                            id="txt_building_no"
                                            value={building_no}
                                            onChange={(e) => setBuilding_no(e.target.value)}
                                            name="building_no"
                                            className="form-control"
                                            placeholder="Building No"
                                        />
                                        <label htmlFor="multicol-password">Building No</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="form-password-toggle">
                                <div className="input-group input-group-merge">
                                    <div className="form-floating form-floating-outline">
                                        <input
                                            type="text"
                                            id="txt_building_road"
                                            value={building_road}
                                            onChange={(e) => setBuilding_road(e.target.value)}
                                            name="building_road"
                                            className="form-control"
                                            placeholder="Road"
                                        />
                                        <label htmlFor="multicol-confirm-password">Road</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="form-password-toggle">
                                <div className="input-group input-group-merge">
                                    <div className="form-floating form-floating-outline">
                                        <input
                                            type="text"
                                            id="txt_building_area"
                                            value={building_city}
                                            onChange={(e) => setBuilding_area(e.target.value)}
                                            name="building_area"
                                            className="form-control"
                                            placeholder="Area"
                                        />
                                        <label htmlFor="multicol-confirm-password">Area</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-6 pt-5">
                        <div className="col-md-2">
                            <div className="form-password-toggle">
                                <div className="input-group input-group-merge">
                                    <div className="form-floating form-floating-outline">
                                        <input
                                            type="text"
                                            id="multicol-confirm-password"
                                            name="building_zip"
                                            value={building_zip}
                                            onChange={(e) => setBuilding_zip(e.target.value)}
                                            className="form-control"
                                            placeholder="Postal Code"
                                        />
                                        <label htmlFor="multicol-confirm-password">Postal Code</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="form-password-toggle">
                                <div className="input-group input-group-merge">
                                    <div className="form-floating form-floating-outline">
                                        <input
                                            type="text"
                                            id="multicol-confirm-password"
                                            name="total_floors"
                                            value={Total_floors}
                                            onChange={(e) => setTotal_floors(e.target.value)}
                                            className="form-control"
                                            placeholder="Total Floor"
                                        />
                                        <label htmlFor="multicol-confirm-password">Total Floor</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="form-password-toggle">
                                <div className="input-group input-group-merge">
                                    <div className="form-floating form-floating-outline">
                                        <input
                                            type="text"
                                            id="multicol-confirm-password"
                                            name="manager_name"
                                            value={Manager_name}
                                            onChange={(e) => setManager_name(e.target.value)}
                                            className="form-control"
                                            placeholder="Manager Name"
                                        />
                                        <label htmlFor="multicol-confirm-password">Manager Name</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="form-password-toggle">
                                <div className="input-group input-group-merge">
                                    <div className="form-floating form-floating-outline">
                                        <input
                                            type="text"
                                            id="multicol-confirm-password"
                                            name="manager_contact"
                                            value={Manager_contact}
                                            onChange={(e) => setManager_contact(e.target.value)}
                                            className="form-control"
                                            placeholder="Manager Contact No"
                                        />
                                        <label htmlFor="multicol-confirm-password">Manager Contact No</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <button type="submit" className="btn btn-primary me-4">
                                <i className="ri-save-line"></i> &nbsp;Save
                            </button>
                            <button type="reset" className="btn btn-outline-secondary">
                                <i className="ri-close-line"></i> &nbsp;Cancel
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        
    );
};

export default BuildingSave;
