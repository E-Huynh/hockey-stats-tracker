import React from 'react';

// Variables
const teamArr = ["Boston Bruins", "Buffalo Sabres", "Detroit Red Wings", "Florida Panthers", "Montreal Canadiens", "Ottawa Senators", "Tampa Bay Lightning", "Toronto Maple Leafs", "Carolina Hurricanes", "Columbus Blue Jackets", "New Jersey Devils", "New York Islanders", "New York Rangers", "Philadelphia Flyers", "Pittsburgh Penguins", "Washington Capitals", "Chicago Blackhawks", "Colorado Avalanche", "Dallas Stars", "Minnesota Wild", "Nashville Predators", "St. Louis Blues", "Winnipeg Jets", "Anaheim Ducks", "Arizona Coyotes", "Calgary Flames", "Edmonton Oilers", "Los Angeles Kings", "San Jose Sharks", "Vancouver Canucks", "Vegas Golden Knights"]


class Teams extends React.Component {
    // states

    // methods
    displayRandomTeam() {
        const rand = Math.floor(Math.random() * 31)
        console.log(teamArr[rand]);
    };

    // render
    render() {
        return (
            <div className='center-align mainDisplay'>
                <h1>Choose a Team</h1>
                <button className="waves-effect waves-light btn randomBtn" onClick={this.displayRandomTeam}>Random</button>
            </div>
        );
    }
}


export default Teams;