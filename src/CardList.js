import React from 'react';
import {robots} from './robotdata';
import Card from './Card';


const Cards = ({robots}) =>{
	
	return (
		<div>
		{
			robots.map((user, i) => {
			return (
				<Card
				 key ={i}
				 id={user.id} 
			 	 name={user.name} 
				 email={user.email}
				/>
			);
			})
		}
		</div>
	);
}
export default Cards;