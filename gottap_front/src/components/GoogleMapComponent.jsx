import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import axios from "axios";
import { useEffect, useState } from "react";

const containerStyle = {
  width: "880px",
  height: "680px",
};

const center = {
  lat: 40.712776,
  lng: -74.005974,
};

const API_KEY = import.meta.env.API_KEY;
const endpoint = "https://maps.googleapis.com/maps/api/place/json";

const GoogleMapComponent = () => {
  const [place, setPlace] = useState([]);
const [search, setSearch] = useState('')
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleMarkerSelection = () => {
    setSelectedPlace(place);
  };

  const handleWindowClose = () => {
    setSelectedPlace(null);
  };

  const handleSearch = (type) => {
    setSearch(type);

    axios
      .get(endpoint, {
        params: {
          key: API_KEY,
          location: "40.712776,-74.005974",
          radius: "5000",
          type: search,
        },
      })
      .then((response) => {
        // console.log(response.data.results[0].photos[0].html_attributions[0]);
        const placesWithPhotos = response.data.results.map((place) => ({
          ...place,
          photo_reference:
            place.photos && place.photos.length > 0
              ? place.photos[0].photo_reference
              : null,
        }));
        setPlace(placesWithPhotos);
      })
      .catch((error) => {
        console.error("Error fetching nearby places:", error);
        console.error("Error response data:", error.response.data);
      });
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <LoadScript googleMApsApiKey={API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        {place.map((place, index) => (
          // to set mark
          <Marker
            key={index}
            position={{
              lat: place.geometry.location.lat,
              lng: place.geometry.location.lng,
            }}
            title={place.name}
            // what marker is this
            onClick={() => handleMarkerClick(place)}
          />
        ))}

        {selectedPlace && (
          // the popup window
          <InfoWindow
            position={{
              lat: selectedPlace.geometry.location.lat,
              lng: selectedPlace.geometry.location.lng,
            }}
            onCloseClick={handleCloseInfoWindow}
          >
            <div>
              <h2>{selectedPlace.name}</h2>

              {selectedPlace.photo_reference && (
                <div>
                  <p>Address: {selectedPlace.vicinity}</p>

                  <img
                    src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${selectedPlace.photo_reference}&key=${API_KEY}`}
                    alt={selectedPlace.name}
                  />
                </div>
              )}
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};


export default GoogleMapComponent