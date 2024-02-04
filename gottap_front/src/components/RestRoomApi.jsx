import { useState, useEffect } from 'react';
import axios from 'axios';
import GoogleMapsComponent from './GoogleMapsApi';
import '../App.css'

function RestRoomApi() {
  const [bathrooms, setBathrooms] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [selectedBathroom, setSelectedBathroom] = useState(null);
  const RAPID_KEY = import.meta.env.VITE_RAPID_KEY;
const SearchNav = async () => {
  const params = {
    lat: userLocation ? userLocation.latitude : 40.74348367390312,
    lng: userLocation ? userLocation.longitude : -73.94179311485065,
    per_page: '10'
  };

const options = {
  method: 'GET',
  url: 'https://public-bathrooms.p.rapidapi.com/location',
  params,
  headers: {
    'X-RapidAPI-Key': `${RAPID_KEY}`,
    'X-RapidAPI-Host': 'public-bathrooms.p.rapidapi.com'
  }
}
try {
	const response = await axios.request(options);
	console.log(response.data);
    return response.data;
} catch (error) {
	console.error(error);
}
}

useEffect(() => {
  const mockPosition = {
    coords: {
      latitude: 40.776676,
      longitude: -73.971321
    }
  }
  const fetchData = async () => {
    const bathrooms = await SearchNav();
    setBathrooms(bathrooms);
  };
  fetchData();
  // mock geolocation
  setUserLocation({
    latitude: mockPosition.coords.latitude, 
    longitude: mockPosition.coords.longitude
  });
}, []);

  const handleBathroomClick = (bathroom) => {
    setSelectedBathroom(bathroom);
  };


  // only show accessible bathrooms
  const accessibleBathrooms = bathrooms.filter(b => b.accessible === true);

  return  (
     <div>
      {accessibleBathrooms.map(bathroom => (
        <div className='bathroom-container' key={bathroom.id} onClick={() => handleBathroomClick(bathroom)}>
          <h2>Name: {bathroom.name}</h2>
          <h2>Unisex: {bathroom.unisex ? 'true' : 'false'}</h2>
          <h3>Address: {bathroom.street}, {bathroom.city}, {bathroom.state}</h3>
          <h3>Directions: {bathroom.directions}, Distance: {bathroom.distance.toFixed(2)} Miles</h3>
          {/* <h3>Latitude: {bathroom.latitude}, Longitude: {bathroom.longitude} </h3> */}
        </div>
      ))}
       (
        <GoogleMapsComponent
        bathrooms={bathrooms}
        selectedBathroom={selectedBathroom}
        setSelectedBathroom={setSelectedBathroom}
        userLocation={userLocation}
        />
      )
      {/* } */}
    </div>
  );
}

export default RestRoomApi;


// Searchbar PLACEHOLDER: Enter zipcode, or City, (NYC only)
// Use axios to get bathroo locations based on zipcode or city
// once bathroom locations are shown and a user clicks one
// use google api to route the users current location to the bathroom chosen

//potential streitch goal: for bathrooms that havent been updated in the last 5 years dont show them