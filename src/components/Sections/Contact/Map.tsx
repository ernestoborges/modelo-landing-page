import styled from "styled-components"
import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api';
import { IoNavigate } from "react-icons/io5";

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

    const externalLinks = {
        googleMaps: `https://www.google.com/maps/search/?api=1&query=${position.lat},${position.lng}`,
        waze: `https://www.waze.com/ul?ll=${position.lat},${position.lng}&navigate=yes`
    }

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
                            <GoogleMapsRedirect
                                href={externalLinks.googleMaps}
                                target="_blank"
                            >
                                <IoNavigate />
                                <span>
                                    Google Maps
                                </span>
                            </GoogleMapsRedirect>
                            <WazeRedirect
                                href={externalLinks.waze}
                                target="_blank"
                            >
                                <IoNavigate />
                                <span>
                                    Waze
                                </span>
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

const Button = styled.a`
    width: 100%;
    padding: 1rem 1rem; 
    border: 0;
    background-color: var(--black);
    color: var(--white);
    border: 0.1rem solid transparent;
    border-radius: 0.4rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;

    transition: background-color 0.3s, color 0.3s, border 0.3s;
    
    display: flex;
    gap: 1rem;
    align-items: center;

    &:hover {
        background-color: var(--white);
        color: var(--black);
        border: 0.1rem solid var(--black);
    }

    & > span {
        flex-grow: 1;
        border-left: 0.1rem solid var(--white);
        padding-left: 1rem;
    }
`

const GoogleMapsRedirect = styled(Button)`
    
`

const WazeRedirect = styled(Button)`
    
`