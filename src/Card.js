import React from 'react';

const Card = ({name, email, id}) => {
	return(
		<div className='bg-green-300 inline-block rounded-lg p-3 m-2 transition-transform transform hover:scale-105'>
			<img src={ `https://robohash.org/${id}?size=200x200`}/>
			<div>
				<h2>{name}</h2>
		
				<p>{email}</p>
			</div>
		</div>
		);
}
export default Card;