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

    // Define a function to map location IDs to an array of image file paths
    const getImagePath = (locationId) => {
        // Define your mapping logic here
        // For example, you could use a switch statement or an object mapping
        switch (locationId) {
            case 5:
                return [
                    '/path/to/your/images/lekki_conservation_centre_1.jpg',
                    '/path/to/your/images/lekki_conservation_centre_2.jpg',
                    '/path/to/your/images/lekki_conservation_centre_3.jpg',
                ];
            // Add cases for other location IDs as needed
            default:
                return ['/path/to/default/image.jpg']; // Default image path if no match found
        }
    };

    return (
        <div>
            {locations.map(location => (
                <div key={location.id}>
                    <h2>{location.location}</h2>
                    <p>{location.history}</p>
                    {/* Example of rendering the first image in the array */}
                    <img src={getImagePath(location.id)[0]} alt={location.location} />
                </div>
            ))}
        </div>
    );
}

export default TourPage;
