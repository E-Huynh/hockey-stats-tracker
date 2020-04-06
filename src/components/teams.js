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
        team: ""
    }

    // methods
    displayRandomTeam = event => {
        event.preventDefault()
        const rand = Math.floor(Math.random() * teamArr.length)
        this.setState({team: teamArr[rand]})
    };

    // render
    render() {
        const str = this.state.team.replace(/\s/g, '')
        console.log('str', str)
        const data = Stats[str]
        console.log('data' ,data)
        return (
            <div className='center-align mainDisplay'>
                <TeamName team={this.state.team !== "" ? this.state.team : "Generate Random Team"}/>
                <RandomBtn displayRandomTeam={this.displayRandomTeam}/>
                <Table stats={data}/>
            </div>
        );
    }
}


export default Teams;