import React,{Component} from 'react';
import {Portfolio} from  './components/Portfolio/Portfolio';
import { about } from './constants/About';
import { skills } from './constants/Skills';
import { projects } from './constants/Projects';
//import { Footer} from './components/Footer';
import { Header,Footer} from './components/Header';

import './App.css';

class App extends Component{
	  constructor () {
		  super();

		  this.state = {
			     selectedSection: "",
			     selectedHeading: "",
			     selectedQuote: "",
			     about: null,
			     skills: null,
			     about: null,
			     projects: null,
		  };
	}
	componentWillMount () {
		this.setState ({ 
			about,
			skills,
			projects,
			selectedHeading: about.heading,
			selectedQuote: about.quote,
			selectedSection: "about" 
		});
	}

	handleSectionClick =  (section) => {
		this.setState({
			selectedSection: section,
			selectedHeading: this.state[section].heading,
			selectedQuote: this.state[section].quote
		})
	}


	render () {
		return (
			<div>
			
			<div className="App">
				<Portfolio
					handleSectionClick={this.handleSectionClick}
					selectedSection={this.state.selectedSection}
					selectedHeading={this.state.selectedHeading}
					selectedQuote={this.state.selectedQuote}
					about={this.state.about}
					skills={this.state.skills}
					projects={this.state.projects}
				/>
				
			</div>
			
			</div>
		);
	}
	

}

export default App;
