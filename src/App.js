import React from 'react';
import './App.css';
import CardList from "./CardList";
import SearchBox from './SearchBox';

const robots = [
    {id:1, name:"John",email:''},
    {id:17, name:"Paul",email:''},
    {id:6, name:"George",email:''},
    {id:29, name:"Alex",email:''},
    {id:31, name:"Matt",email:''},
    {id:7, name:"Joel",email:''}
]

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className='tc'>
                <h1 className='f1'>Robofriends</h1>
                <SearchBox searchChange={ this.onSearchChange } />
                <CardList robots={ filteredRobots }/>
            </div>
        )
    }
}

export default App;
