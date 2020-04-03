import React from "react";
import TableRow from "./tableRow"
import Stats from "./stats.json"

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
                {Stats.map((obj) =>
                    <TableRow key={obj.id} {...obj} />
                )}
            </tbody>
        </table>
    )
}

export default Table;