import React, { useState } from 'react';
import { MapBody, Searchbar } from '../index';

const Home = () => {
	const [ cityName,  setCityName] = useState();
	const [ stateName, setStateName ] = useState();
	return (
		<div>
			<Searchbar 
				cityName={cityName} 
				stateName={stateName}
				setCityName={setCityName}
				setStateName={setStateName}
			/>
			<MapBody 
				cityName={cityName}
			/>
		</div>
	  );
};
export default Home ;
