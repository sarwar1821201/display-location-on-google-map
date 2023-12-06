import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React from 'react';

const containerStyle= {
    width: '400px',
    height: '400px'
};


 const center= {
    lat: -3.745,
    lng: -38.523
 };

const MyLocation = () => {
    return (
        <div>
            
     <LoadScript
      
        googleMapsApiKey='your_api_key'
     >

        <GoogleMap
           mapContainerStyle={containerStyle}
           center={center}
           zoom={10}
        >

        </GoogleMap>

     </LoadScript>


    

        </div>
    );
};

export default MyLocation;