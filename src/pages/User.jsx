// import React, { useState } from 'react';

// import UserSave from '../components/UserSave'
// import UserList from '../components/UserList'

//     const User = () => {
//     const [reload, setReload] = useState(false);

   
//     const handleSave = () => {
//         setReload(prevReload => !prevReload); // Toggle reload state
//     };

//     const handleEdit = (data) => {
//       setEditData(data);
//       setIsEditMode(true);
//   };


//   return (
//     <div style={{marginTop:"60px",padding:"20px"}}>

//       <UserSave editData={editData} onSave={handleSave} isEditMode={isEditMode} />
//       <UserList reload={reload} onEdit={handleEdit} />
            
//              {/* <UserSave editData={editData} onSave={handleSave}/>
//              <UserList reload={reload}/> */}

//     </div>
//   )
// }

// export default User


import React, { useState } from 'react';
import UserSave from '../components/UserSave';
import UserList from '../components/UserList';

const User = () => {
  const [reload, setReload] = useState(false);
  const [editData, setEditData] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [deleteData, setDeleteData] = useState(null);

  // Function to handle reload
  const handleSave = () => {
    setReload(prevReload => !prevReload); // Toggle reload state
  };

  const handleEdit = (data) => {
    setEditData(data);
    setIsEditMode(true);
  };
  const handleDelete = (data) => {
    //setEditData(data);
    //setIsEditMode(true);
  };

  return (
    <div style={{ marginTop: "60px", padding: "20px" }}>
      <UserSave editData={editData} onSave={handleSave} isEditMode={isEditMode} />
      <UserList reload={reload} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default User;

