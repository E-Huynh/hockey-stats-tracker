import React from 'react';
import Table from './table';
import TeamName from './teamName';
import RandomBtn from './randomBtn';
import allTeams from './allTeams.json';
import Stats from './stats.json';

// Variables
const teamArr = allTeams
const stats = Stats

class Teams extends React.Component {
    // states
    state = {
        team: "",
        stats: stats
    }

    // methods
    displayRandomTeam = event => {
        event.preventDefault()
        const rand = Math.floor(Math.random() * 31)
        this.setState({team: teamArr[rand]})
    };

    // render
    render() {
        return (
            <div className='center-align mainDisplay'>
                <TeamName team={this.state.team !== "" ? this.state.team : "Generate Random Team"}/>
                <RandomBtn displayRandomTeam={this.displayRandomTeam}/>
                <Table stats={this.state.stats}/>
            </div>
        );
    }
}


export default Teams;