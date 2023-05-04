import styled from "styled-components"
import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api';

const libraries: ["places" | "drawing" | "geometry" | "localContext" | "visualization"] = ['places'];

export function Map() {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLEMAPS_API_KEY,
        libraries
    });

    console.log("key: " + import.meta.env.VITE_REACT_APP_GOOGLEMAPS_API_KEY)

    const position = { lat: -20.83792149724476, lng: -40.727963147018954 };

    return (
        <>
            <Container>
                {
                    isLoaded &&
                    <GoogleMap
                        mapContainerStyle={{ width: "100%", height: "100%" }}
                        center={position}
                        zoom={17}
                        options={{
                            zoomControl: false,
                            streetViewControl: false,
                            mapTypeControl: false,
                            fullscreenControl: false
                        }}
                        onLoad={(map) => map.panTo(position)}
                    >
                        <MarkerF position={position} />
                    </GoogleMap>

                }
            </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    height: 40rem;
`