
import React, { useState } from 'react';
import BuildingSave from '../components/BuildingSave';
import BuildingList from '../components/BuildingList';

const Building = () => {
    const [reload, setReload] = useState(false);

    // Function to handle reload
    const handleSave = () => {
        setReload(prevReload => !prevReload); // Toggle reload state
    };

    return (
        <div style={{ marginTop: "60px", padding: "20px" }}>
            <BuildingSave onSave={handleSave} />
            <BuildingList reload={reload} />
        </div>
    );
};

export default Building;


// import React from 'react'
// import BuildingSave from '../components/BuildingSave'
// import BuildingList from '../components/BuildingList'

// function Building() {
//   return (
//     <div style={{marginTop:"60px",padding:"20px"}}>
        
//             <BuildingSave/>
//             <BuildingList/>
           
   
//     </div>
//   )
// }

// export default Building