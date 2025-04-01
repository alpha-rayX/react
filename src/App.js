import React, { Component } from 'react';
import CardList from './CardList';
import {robots} from './robotdata';
import SBox from './sB';



class App extends Component{
	constructor(){
		super()
		this.state ={
			robots: robots,
			searchfield: ''
		}
	}
	whenSeachChange = (event) =>{
		
		const filteredRobots = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		console.log(filteredRobots);
	}

	render(){
		return (
			<div>
				<h1>Robo-Friends</h1>
				<SBox searchChange={this.whenSeachChange}/>
				<CardList robots={this.state.robots}/>
			</div>
	);
	}
	
}
export default App;