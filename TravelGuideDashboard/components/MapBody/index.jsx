import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import MapGL from "react-map-gl";
import Geocode from 'react-geocode';

const MapBody = ({ cityName }) => {
	const mapStyle = {
		width: '80%',
		height: '70vh',
		margin: 'auto',
		borderRadius: '16px'
	}
	const [ viewport, setViewPort ] = useState({ });
	const Token = "pk.eyJ1Ijoic2hyZXl2aWpheXZhcmdpeWEiLCJhIjoiY2pzamxxbG5zMHppMTQ0cW91OTd0aHBwZCJ9.zT0Jji19YEj8pR5P495KrA";
	const [ coords, setCoords ] = useState({});

	useEffect(() => {
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(position => {
				const latitude = position.coords.latitude;
				const longitude = position.coords.longitude;
				const zoom = 9;
				const height = '70vh';
				const width = '80%'
				 setViewPort({ latitude, longitude, zoom, height, width });
			});
		}
	}, [ ]);
	Geocode.setApiKey("AIzaSyAIc6Zs2s4htl-CnOuUt3aRRDoUNbIZ0jU");

	if(cityName){
		Geocode.fromAddress(cityName).then(
			response => {
				const { lat, lng } = response.results[0].geometry.location;
				console.log(lat, lng);
			  },
			  error => {
				console.error(error);
			  }
		)
	}
	// console.log(cityName, 'cityName inside Mapbody')
	return (
		<MapGL
		   {...viewport}
		   style={mapStyle}
		   mapStyle="mapbox://styles/mapbox/dark-v10"
		   mapboxApiAccessToken={Token}
		/>
	)
};

export default MapBody;

