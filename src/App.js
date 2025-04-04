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
		this.setState({searchfield: event.target.value})
		
	}

	render(){
		const filteredRobots = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
			<div className="text-center">
				<h1 className="text-6xl">
					Robo-Friends</h1>
				<SBox searchChange={this.whenSeachChange}/>
				<CardList robots={filteredRobots}/>
			</div>
	);
	}
	
}
export default App;