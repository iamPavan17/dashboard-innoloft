import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { PropTypes } from "prop-types";
import googleMapStyles from "./style";

const GMap = (props) => {
  const mapStyles = {
    width: "100%",
    height: "230px",
    position: "relative",
  };

  return (
    <Map
      google={props.google}
      zoom={14}
      styles={googleMapStyles}
      style={mapStyles}
      initialCenter={{ lat: props.latitude, lng: props.longitude }}
    >
      <Marker
        position={{ lat: props.latitude, lng: props.longitude }}
        animation={props.google.maps.Animation.BOUNCE}
      />
    </Map>
  );
};

GMap.propTypes = {
  google: PropTypes.object,
  latitude: PropTypes.string,
  longitude: PropTypes.string,
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBquLTnLbEUTZ7MFg7M_bzGTNPWe-ArHtc",
})(GMap);
