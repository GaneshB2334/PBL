import React, { useState, useEffect } from 'react';
import ExpandRight from "/ExpandRight.svg"

const LocationComponent = () => {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);

    const handleOpenGoogleMaps = () => {
        if (location) {
            const url = `https://www.google.com/maps/search/pet+clinic+near+me+/@${location.latitude},${location.longitude}`;
            window.open(url, '_blank');
        } else {
            setError('Location is not available');
        }
    };

    useEffect(() => {
        if (!navigator.geolocation) {
            setError('Geolocation is not supported by your browser');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
            },
            (error) => {
                setError(`Error retrieving location: ${error.message}`);
            }
        );
    }, []);

    return (
        <div className='min-h-[80vh]'>
            <div className='w-[50%] h-[30vh] m-auto mt-3 flex justify-evenly items-center rounded-xl bg-[#529add] text-[23px] '>
                <button onClick={handleOpenGoogleMaps}>Open Google Maps</button>
                {error && <div>{error}</div>}
                <img className='w-[30px] h-[30px] cursor-pointer' onClick={handleOpenGoogleMaps} src={ExpandRight} alt="" />
            </div>
        </div>
    );
};

export default LocationComponent;
