import React from 'react';
import MaterialTable from 'material-table';
import Header from '../Header/Header'
import DialogForm from '../DialogForm/DialogForm';

export default function Report() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Name', field: 'name' },
            { title: 'Last Name', field: 'lastname' },
            { title: 'Age', field: 'age', type: 'numeric' },
            { title: 'Birth Place', field: 'birthCity', lookup: { 1: 'Jordan', 2: 'USA', 3: 'UAE' } },
        ],
        data: [
            { name: 'Mustafa J. ', lastname: 'Al-Salhi', age: 3, birthCity: 1 },
            { name: 'Ali Amin', lastname: 'Al-Ahmad', age: 4, birthCity: 2 },
            { name: 'Roula Amin', lastname: 'Al-asad', age: 7, birthCity: 3 },
        ],
        showDialog: false
    });

    const closeDialog = () => {
        setState(prevState => ({ ...prevState,showDialog: !prevState.showDialog }))
    }

    return (
        <div>
            <Header />

            <MaterialTable
                title="Kids Information"
                columns={state.columns}
                data={state.data}
                onRowClick={() => {
                    setState(prevState => ({ ...prevState,showDialog: !prevState.showDialog  }))
                }
                }
                editable={{
                    onRowAdd: newData =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                setState(prevState => {
                                    const data = [...prevState.data];
                                    data.push(newData);
                                    return { ...prevState, data };
                                });
                            }, 600);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                if (oldData) {
                                    setState(prevState => {
                                        const data = [...prevState.data];
                                        data[data.indexOf(oldData)] = newData;
                                        return { ...prevState, data };
                                    });
                                }
                            }, 600);
                        }),
                    onRowDelete: oldData =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                setState(prevState => {
                                    const data = [...prevState.data];
                                    data.splice(data.indexOf(oldData), 1);
                                    return { ...prevState, data };
                                });
                            }, 600);
                        }),

                }}
            />
            {
                state.showDialog ? <DialogForm
                    closeDialogProps={closeDialog} /> : ''
            }
        </div>
    );
}