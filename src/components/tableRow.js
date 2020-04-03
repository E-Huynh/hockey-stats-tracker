import React from "react";

function TableRow(props) {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.team}</td>
            <td>{props.shoots}</td>
            <td>{props.position}</td>
            <td>{props.played}</td>
            <td>{props.goals}</td>
            <td>{props.assists}</td>
            <td>{props.points}</td>
        </tr>
    )
}

export default TableRow;