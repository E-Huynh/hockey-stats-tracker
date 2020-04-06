import React from 'react';
import Table from './table';
import TeamName from './teamName';
import RandomBtn from './randomBtn';

// Variables
const teamArr = ["Boston Bruins", "Buffalo Sabres", "Detroit Red Wings", "Florida Panthers", "Montreal Canadiens", "Ottawa Senators", "Tampa Bay Lightning", "Toronto Maple Leafs", "Carolina Hurricanes", "Columbus Blue Jackets", "New Jersey Devils", "New York Islanders", "New York Rangers", "Philadelphia Flyers", "Pittsburgh Penguins", "Washington Capitals", "Chicago Blackhawks", "Colorado Avalanche", "Dallas Stars", "Minnesota Wild", "Nashville Predators", "St. Louis Blues", "Winnipeg Jets", "Anaheim Ducks", "Arizona Coyotes", "Calgary Flames", "Edmonton Oilers", "Los Angeles Kings", "San Jose Sharks", "Vancouver Canucks", "Vegas Golden Knights"]


class Teams extends React.Component {
    // states
    state = {
        team: ""
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
                <Table />
            </div>
        );
    }
}


export default Teams;