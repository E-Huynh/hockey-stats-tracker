import React from 'react';

function RandomBtn(props) {
    return (
        <button className="waves-effect waves-light btn randomBtn" onClick={props.displayRandomTeam}>Random</button>
    );
}

export default RandomBtn;