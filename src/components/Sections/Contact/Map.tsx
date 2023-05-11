import styled from "styled-components"
import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api';

const libraries: ["places" | "drawing" | "geometry" | "localContext" | "visualization"] = ['places'];

export function Map() {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLEMAPS_API_KEY,
        libraries
    });

    const position = { lat: -20.83792149724476, lng: -40.727963147018954 };

    const label = {
        text: "Modelo Engenharia",
        className: "my-custom-class-for-label",
        color: "#c92a2a"
    };

    return (
        <>
            <Container>
                {
                    isLoaded &&
                    <>
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
                            <MarkerF
                                position={position}
                                title="Modelo Engenharia"
                                label={label}
                                icon={{
                                    url: "/images/map/marker.png",
                                    scaledSize: new google.maps.Size(25, 40),
                                    labelOrigin: new google.maps.Point(66, 0)
                                }}
                            />
                        </GoogleMap>
                        <ButtonsContainer>
                            <GoogleMapsRedirect>
                                Google Maps
                            </GoogleMapsRedirect>
                            <WazeRedirect>
                                Waze
                            </WazeRedirect>
                        </ButtonsContainer>
                    </>
                }
            </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    height: 40rem;
    position: relative;

    & .my-custom-class-for-label {
        margin-top: 3.4rem;
        white-space: normal;
        width: 9.2rem;
        text-align: left;
        padding: 0.4rem 1rem;
        font-weight: bold;
        font-size: 1.6rem;
        border-radius: 0.4rem;

        text-shadow: 
            1px 0px 0px white,   /* Right shadow */
            -1px 0px 0px white,  /* Left shadow */
            0px 1px 0px white,   /* Bottom shadow */
            0px -1px 0px white;  /* Top shadow */
    }
`

const ButtonsContainer = styled.div`
    top: 0;
    left: 0;
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;

`

const Button = styled.button`
    width: 100%;
    padding: 1rem 2rem; 
    border: 0;
    background-color: var(--black);
    color: var(--white);
    border: 0.1rem solid transparent;
    border-radius: 0.4rem;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s, border 0.3s;
    

    &:hover {
        background-color: var(--white);
        color: var(--black);
        border: 0.1rem solid var(--black);
    }
`

const GoogleMapsRedirect = styled(Button)`
    
`

const WazeRedirect = styled(Button)`
    
`