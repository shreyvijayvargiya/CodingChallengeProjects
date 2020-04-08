import styled from 'styled-components';

export const Container = styled.div`
	width: 80%;
	height: 20vh;
	text-align: center;
	margin: 10px auto;
	background-color: white;
	border-radius: 16px;
	box-shadow: 4px 4px 8px lightgray;
	display: flex;
	justify-content: space-around;
	& > * {
		margin: 20px auto;
	};
	select, option {
		background-color: #4C4B4B;
		z-index: 99;
		padding: 8px 0px;
		border-radius: 8px;
		outline: none;
	};

		::-webkit-scrollbar {
		  width: 10px;
		  height: 10%;
		}
		::-webkit-scrollbar-track {
		  background: #f1f1f1;
		}
		::-webkit-scrollbar-thumb {
			background: #888;
		}
		::-webkit-scrollbar-thumb:hover {
			background: indianred;
		}
	

`;

