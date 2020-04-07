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
        position: "A",
        stats: ({Stats})
    }

    filterStats = () => {
        console.log('filterStats fx: ', this.state.stats);
    }

    filterByTeam = () => {
        const team = Stats[this.state.team.replace(/\s/g, '')];
        return this.filterByPosition(team)
    }
    
    filterByPosition = filteredTeam => {
        const filteredPlayers = filteredTeam.filter((player, index) => {
            return this.state.position === player.position
        })
        return filteredPlayers.length !== 0 ? filteredPlayers : filteredTeam
    }

    // methods
    displayRandomTeam = event => {
        event.preventDefault()
        const rand = Math.floor(Math.random() * allTeams.length)
        this.setState({team: allTeams[rand]})
    };

    resetStats = event => {
        this.setState({
            team: "Carolina Hurricanes",
            position: "A",
            stats: {Stats}
        })
    }

    handleTeamSelect = event => {
        this.setState({team: event.target.value})
    }

    handlePositionSelect = event => {
        switch (event.target.value) {
            case 'Left Wing':
                this.setState({position: 'L'})
                break;
            case 'Right Wing':
                this.setState({position: 'R'})
                break;
            case 'Center':
                this.setState({position: 'C'})
                break;
            case 'Defensemen':
                this.setState({position: 'D'})
                break;
            case 'Goalie':
                this.setState({position: 'G'})
                break;
            default:
                this.setState({position: 'A'})
                break;
        }
    }

    // render
    render() {
        const teamObj = this.filterByTeam()
        // const teamObj = this.state.stats[this.state.team.replace(/\s/g, '')]
        return (
            <div className='center-align mainDisplay'>
                <Select label={'Team'} array={allTeams} onChange={this.handleTeamSelect}/>
                <Select label={'Position'} array={['All Positions', 'Left Wing', 'Right Wing', 'Center', 'Defensemen', 'Goalie']} onChange={this.handlePositionSelect}/>
                <RandomBtn displayRandomTeam={this.displayRandomTeam}/>
                <TeamName team={this.state.team !== "" ? this.state.team : "Generate Random Team"}/>
                <StatsTable stats={teamObj}/>
            </div>
        );
    }
}


export default Teams;