import React from 'react';
import Li from './li'

function Dropdown(props) {
    return (
        <div>
            <button className="dropdown-trigger btn" href="#" data-target="teamDroplist">Team</button>
            <ul id="teamDroplist" className="dropdown-content">
                {props.teamArr.map((obj) =>
                    <Li team={obj} />
                )}
            </ul>
        </div>

    )
}

export default Dropdown;