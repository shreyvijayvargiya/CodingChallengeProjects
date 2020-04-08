import React, { useRef, useEffect, useState } from 'react';
import { Container } from './styles';
import axios from 'axios';

const Searchbar = ({ cityName, stateName, setCityName, setStateName }) => {
	
	const [ cities, setCities ] = useState([ ]);
	const [ state, setState ] = useState([ ]);
	const statesUrl = 'https://indian-cities-api-nocbegfhqg.now.sh/cities';
	

	useEffect(() => {
		const states = [ ];
		axios.get(statesUrl).then((res) => {
			res.data.map(item => {
				if(states.indexOf(item.State) < 0){
					states.push(item.State)
				}
			});
			setState(states);
		});
	}, [ ]);
	
	useEffect(() => {
		const cityUrl = `https://indian-cities-api-nocbegfhqg.now.sh/cities?State=${stateName}`
		axios.get(cityUrl).then((res) => {
			res.data.map(item => {
				setCities((oldArray) => [ ...oldArray, item.City ]);
			});
		});	
	}, [ stateName ]);
	
	return (
		<Container>
			<div>
				<h3> Select State </h3>
				<select id="state" onChange={(event) => setStateName(event.target.value)}>
					{state && state.map((item, i) => (
						<option key={i} value={item}>{item}</option>
					))}
				</select>
			</div>
			{stateName && <div>
				<h3> Select City </h3>
				<select id="city" onChange={(event) => setCityName(event.target.value)}>
					{/* {cities && cities.map((item, i) => (
						<option key={i} value={item}>{item}</option>
					))} */}
					<option value="Kota" key={1}>Kota</option>
					<option value="Jaipur" key={2}>Jaipur</option>
				</select>
			</div>}
			<div>
				<img src='/assets/bars.png' alt="Add Marker" width={50} height={50}  />
			</div>
			<div>
				<img src="/assets/profile_logo.png" width={50} height={50} />
			</div>
		</Container>
	);
};
export default Searchbar;

