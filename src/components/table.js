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
                <TableRow name={'sebastian'} team={'CAR'} shoots={'L'} position={'C'} played={68} goals={38} assists={28} points={66}  />
            </tbody>
        </table>
    )
}

export default Table;