import {
  GoogleMap,
  Marker,
  LoadScript,
  InfoWindow,
} from "@react-google-maps/api";



const center = {
  lat: 40.7128,
  lng: -74.006,
};

const containerStyle = {
  width: "800px",
  height: "600px",
};

const GoogleMapsComponent = ({
  bathrooms,
  userLocation,
  selectedBathroom,
  setSelectedBathroom,
}) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  console.log(selectedBathroom);

  const handleMarkerClick = (bathroom) => {
    setSelectedBathroom(bathroom);
  };
  // hover effect instead of click on marker
  // once clicked, pan into
  const handleCloseInfoWindow = () => {
    setSelectedBathroom(null);
  };
  bathrooms.map((bathroom) => {
    console.log(bathrooms);
    console.log("Bathroom marker position:", {
      lat: bathroom.latitude,
      lng: bathroom.longitude,
    });
  });
  return (
    <LoadScript googleMapsApiKey={API_KEY} loading="async">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        {bathrooms.map((bathroom) => (
          <Marker
            key={bathroom.id}
            position={{
              lat: bathroom.latitude,
              lng: bathroom.longitude,
            }}
            title={bathroom.name}
            onClick={() => handleMarkerClick(bathroom)}
          />
        ))}
        {selectedBathroom && (
          <InfoWindow
            position={{
              lat: selectedBathroom.latitude,
              lng: selectedBathroom.longitude,
            }}
            onCloseClick={handleCloseInfoWindow}
          >
            <div >
              <h3>{selectedBathroom.name}</h3>
              {selectedBathroom && (
                <div>
                  <h4>Unisex: {selectedBathroom.unisex ? "True" : "False"}</h4>
                  <h4>
                    Address: {selectedBathroom.street}, {selectedBathroom.city},{" "}
                    {selectedBathroom.state}
                  </h4>
                  <h4>
                    Directions: {selectedBathroom.directions}, Distance:{" "}
                    {selectedBathroom.distance.toFixed(2)} Miles
                  </h4>
                </div>
              )}
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapsComponent;

//   {selectedBathroom && (
//     <InfoWindow
//       position={{
//         lat: selectedBathroom.latitude,
//         lng: selectedBathroom.longitude
//       }}
//       onCloseClick={handleCloseInfoWindow}
//     >
//       <div>
//         <h2>{selectedBathroom.name}</h2>
//         {selectedBathroom.photo_reference && (
//           <div>
//             <p>Address: {selectedBathroom.vicinity}</p>
//             <p> {selectedBathroom.plus_code.compound_code}</p>
//             <p>Hours: {selectedBathroom.hours}</p>
//             {/* <p>Rating: {selectedPlace.rating}</p> */}
//             {/* <p>Total Reviews: {selectedPlace.user_ratings_total}</p> */}
//             <img
//               src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${selectedBathroom.photo_reference}&key=${API_KEY}`}
//               alt={selectedBathroom.name}
//             />
//           </div>
//         )}
//       </div>
//     </InfoWindow>
//   )}
