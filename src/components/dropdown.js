import React from 'react';
import Li from './li'

function Dropdown(props) {
    return (
        <div className="input-field col s12">
            <select>
                <option disabled>Choose a Team</option>
                {props.teamArr.map((obj) =>
                    <Li team={obj} clickEvent={props.clickEvent} />
                )}
            </select>
            <label>Team Select</label>
        </div>


    )
}

export default Dropdown;