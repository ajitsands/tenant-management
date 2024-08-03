import React, { useState } from 'react';
import axios from 'axios';

const UserSave = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [userType, setUserType] = useState({ value: '', text: '' });
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
   alert(name);
    try{
        const response = await axios.post('http://localhost:5000/api/user', {
            name,
            email,
            contactNumber,
            userType: userType.text,
            userName,
            confirmPassword,
        });
        alert(response.data);
    }
    catch(error){
        console.log(error);
    }
  };
  const handleUserTypeChange = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    setUserType({ value: selectedOption.value, text: selectedOption.text });
  };

  return (
    <div>
      <div className="card mb-6">
        <form className="card-body" id="frm_users_details" onSubmit={handleSubmit}>
          <h6>User Details</h6>
          <div className="row g-6">
            <div className="col-md-3">
              <div className="form-floating form-floating-outline">
                <input
                  type="text"
                  id="user_name"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <label htmlFor="user_name">Name</label>
              </div>
            </div>
            <div className="col-md-3">
              <div className="input-group input-group-merge">
                <div className="form-floating form-floating-outline">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-password-toggle">
                <div className="input-group input-group-merge">
                  <div className="form-floating form-floating-outline">
                    <input
                      type="number"
                      id="txt_contact_number"
                      name="contact_no"
                      className="form-control"
                      placeholder="Contact Number"
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      required
                    />
                    <label htmlFor="txt_contact_number">Contact Number</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-6">
              <div className="form-floating form-floating-outline">
              <select
                  id="select2Basic"
                  className="select2 form-select form-select-md"
                  name="user_type"
                  value={userType.value}
                  onChange={handleUserTypeChange}
                  required
                >
                  <option value="">Select User Type</option>
                  <option value="1">Super Admin</option>
                  <option value="2">Tenant</option>
                  <option value="3">User</option>
                  <option value="4">Owner</option>
                </select>
                <label htmlFor="select2Basic">User Type</label>
              </div>
            </div>
          </div>
          <hr className="my-6 mx-n4" />
          <div className="row g-6">
            <div className="col-md-4">
              <div className="form-floating form-floating-outline">
                <input
                  type="text"
                  id="txts_user_name"
                  name="user_name"
                  className="form-control"
                  placeholder="User Name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
                <label htmlFor="txts_user_name">User Name</label>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-floating form-floating-outline">
                <input
                  type="password"
                  id="txts_password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="txts_password">Password</label>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-floating form-floating-outline">
                <input
                  type="password"
                  id="txts_confirm_password"
                  name="confirm_password"
                  className="form-control"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <label htmlFor="txts_confirm_password">Confirm Password</label>
              </div>
            </div>
          </div>
          <div className="pt-6">
            <button type="submit" id="button_userdetails" className="btn btn-primary me-4">Submit</button>
            <button type="reset" className="btn btn-outline-secondary">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserSave;
