import React from 'react';
import StatsTable from './statsTable';
import TeamName from './teamName';
import RandomBtn from './randomBtn';
import allTeams from './allTeams.json';
import Stats from './stats.json';
import Dropdown from './dropdown';

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

    clickEvent = event => {
        event.preventDefault();
        console.log("event", event);
        // this.setState({team: })
    }

    // render
    render() {
        const teamObj = Stats[this.state.team.replace(/\s/g, '')]
        return (
            <div className='center-align mainDisplay'>
                <Dropdown teamArr={allTeams} onChange={this.clickEvent}/>
                <RandomBtn displayRandomTeam={this.displayRandomTeam}/>
                <TeamName team={this.state.team !== "" ? this.state.team : "Generate Random Team"}/>
                <StatsTable stats={teamObj}/>
            </div>
        );
    }
}


export default Teams;