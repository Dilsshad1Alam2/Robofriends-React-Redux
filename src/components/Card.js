import React from 'react';

const Card =({name, email, id})=>{
	return(
		<div className='bg-light-green dib pa3 ma2 grow bw5 shadow-5 tc br3'>
			<img src={`https://robohash.org/${id}?size=180x181`} alt="robots" />
			<div>
				<h2>{ name }</h2>
				<p>{ email } </p>
			</div>
		</div>
	);
}

export  default Card;