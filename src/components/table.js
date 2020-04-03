import React from "react";
import TableRow from "./tableRow"

function Table() {
    return (
        <table className='highlight responsive-table'>
            <thead>
                <tr>
                    <th>Player</th>
                    <th>Team</th>
                    <th>S/C</th>
                    <th>Pos</th>
                    <th>GP</th>
                    <th>G</th>
                    <th>A</th>
                    <th>P</th>
                </tr>
            </thead>
            <tbody>
                <TableRow />
            </tbody>
        </table>
    )
}

export default Table;