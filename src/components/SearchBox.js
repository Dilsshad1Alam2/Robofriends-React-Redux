import React from 'react';

const SearchBox = ({ searchfield, searchChange} ) =>{
	return(
		<div className ="pa2 tc">
		<input type="search" 
		placeholder="Search Robots" className=" pa3 bg-light-green tc ba bw1" 
		onChange = { searchChange }
		/>
		</div>

		);
}

export default SearchBox;