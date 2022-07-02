import React from 'react';
import Description from './Description';
import Glance from './Glance';

const Nature = () => {
    return (
        <div style={{display:"flex",justifyContent:"space-between"}}>
           <div style={{width:"20%"}}>
            <Glance></Glance>
           </div>
            <div  style={{width:"80%"}}>
<Description></Description>
            </div>
        </div>
    );
};

export default Nature;