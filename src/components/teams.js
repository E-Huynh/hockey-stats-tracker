import React from 'react';
import StatsTable from './statsTable';
import TeamName from './teamName';
import RandomBtn from './randomBtn';
import allTeams from './allTeams.json';
import Stats from './stats.json';
import Select from './select';

// Variables

class Teams extends React.Component {
    // states
    state = {
        team: "Carolina Hurricanes",
        division: ""
    }

    // methods
    displayRandomTeam = event => {
        event.preventDefault()
        const rand = Math.floor(Math.random() * allTeams.length)
        this.setState({team: allTeams[rand]})
    };

    handleChange = event => {
        event.preventDefault();
        this.setState({team: event.target.value})
    }

    // render
    render() {
        const teamObj = Stats[this.state.team.replace(/\s/g, '')]
        return (
            <div className='center-align mainDisplay'>
                <Select teamArr={allTeams} onChange={this.handleChange}/>
                <RandomBtn displayRandomTeam={this.displayRandomTeam}/>
                <TeamName team={this.state.team !== "" ? this.state.team : "Generate Random Team"}/>
                <StatsTable stats={teamObj}/>
            </div>
        );
    }
}


export default Teams;