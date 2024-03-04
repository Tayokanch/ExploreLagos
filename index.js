import React, { useState, useEffect } from 'react';

function TourPage() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        // Fetch data from the API when the component mounts
        fetch('your-api-endpoint')
            .then(response => response.json())
            .then(data => setLocations(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // Define a function to map location names to image file paths
    const getImagePath = (locationName) => {
        // Define your mapping logic here
        // For example, you could use a switch statement or an object mapping
        switch (locationName) {
            case 'Lekki conservation centre':
                return '/path/to/your/images/lekki_conservation_centre.jpg';
            // Add cases for other locations as needed
            default:
                return '/path/to/default/image.jpg'; // Default image path if no match found
        }
    };

    return (
        <div>
            {locations.map(location => (
                <div key={location.id}>
                    <h2>{location.location}</h2>
                    <p>{location.history}</p>
                    <img src={getImagePath(location.location)} alt={location.location} />
                </div>
            ))}
        </div>
    );
}

export default TourPage;