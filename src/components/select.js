import React from 'react';
import Option from './option'

function Select(props) {
    console.log(props)
    return (
        <div className="input-field col s12">
            <select onChange={props.onChange}>
                <option disabled>Select a {props.label}</option>
                {props.array.map((index) =>
                    <Option arrayValue={index} />
                )}
            </select>
            <label>Select a {props.label}</label>
        </div>


    )
}

export default Select;