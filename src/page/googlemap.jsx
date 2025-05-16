// MapComponent.jsx or .tsx
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const center = {
    lat: 28.6139,   // Latitude
    lng: 77.2090    // Longitude (Delhi)
};

const MapComponent = ({ width }) => {
    const containerStyle = {
        width: `${width}px`,
        height: '400px'
    };

    const apiKey = import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY
    return (
        <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;
