import React from 'react';
import Option from './option'

function Select(props) {
    console.log(props)
    return (
        <div className="input-field col s12">
            <select onChange={props.onChange}>
                <option disabled>Choose a Team</option>
                {props.teamArr.map((index) =>
                    <Option team={index} />
                )}
            </select>
            <label>Team Select</label>
        </div>


    )
}

export default Select;