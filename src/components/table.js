import React from 'react';
import MaterialTable from 'material-table';
import Stats from './stats.json';

export default function Table() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Player', field: 'player' },
      { title: 'Team', field: 'team' },
      { title: 'Position', field: 'position', lookup: { L: 'Left Wing', R: 'Right Wing', C: 'Center', D: 'Defense', G: 'Goalie'}},
      { title: 'Shoot/Catch', field: 'sc', lookup: { L: 'Left', R: 'Right'} },
      { title: 'Games Played', field: 'played', type: 'numeric' },
      { title: 'Goals', field: 'goals', type: 'numeric' },
      { title: 'Assists', field: 'assists', type: 'numeric' },
      { title: 'Points', field: 'points', type: 'numeric' },
    ],
    data: Stats
  });

  return (
    <MaterialTable
      title="Player Stats"
      columns={state.columns}
      data={state.data}
      options={{paging: false}}
      // editable={{
      //   onRowAdd: (newData) =>
      //     new Promise((resolve) => {
      //       setTimeout(() => {
      //         resolve();
      //         setState((prevState) => {
      //           const data = [...prevState.data];
      //           data.push(newData);
      //           return { ...prevState, data };
      //         });
      //       }, 600);
      //     }),
      //   onRowUpdate: (newData, oldData) =>
      //     new Promise((resolve) => {
      //       setTimeout(() => {
      //         resolve();
      //         if (oldData) {
      //           setState((prevState) => {
      //             const data = [...prevState.data];
      //             data[data.indexOf(oldData)] = newData;
      //             return { ...prevState, data };
      //           });
      //         }
      //       }, 600);
      //     }),
      //   onRowDelete: (oldData) =>
      //     new Promise((resolve) => {
      //       setTimeout(() => {
      //         resolve();
      //         setState((prevState) => {
      //           const data = [...prevState.data];
      //           data.splice(data.indexOf(oldData), 1);
      //           return { ...prevState, data };
      //         });
      //       }, 600);
      //     }),
      // }}
    />
  );
}
