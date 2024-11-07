import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
//ag grid
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
//material-ui avatar
import Avatar from '@mui/material/Avatar';



function Contacts() {
    const contacts = useSelector((state) => state.contacts.contacts); // Access contacts from Redux state

    // Define the column definitions for AG Grid for laptop and tablet screens
    const columnDefsMD = [
        {
            headerName: "Avatar", field: "avatar", flex: 0.5,
            cellRenderer: (params) => (
                <Avatar src={`${params.value}`} />
            )
        },
        { headerName: "Name", field: "name", flex: 1, sortable: true, filter: true },
        { headerName: "Phone", field: "phone", flex: 1, sortable: true, filter: true },
        { headerName: "Mail", field: "mail", flex: 1.5, sortable: true, filter: true },
        { headerName: "Place", field: "place", flex: 1, sortable: true, filter: true },


        {
            headerName: "Actions", flex: 1,
            field: "id",
            cellRenderer: (params) => (
                <Link to={`/edit/${params.value}`} className='' >
                    <button className='bg-gray-700 text-white px-5 hover:bg-slate-800'>Edit</button>
                </Link>
            )
        },

    ];

    // Define the column definitions for AG Grid for mobile screens

    const columnDefs = [
        {
            field: 'contactCard',
            headerName: 'Contacts',
            flex:1,
          
            cellStyle: { display: 'flex', justifyContent: 'center' },
            cellRenderer: (params) => (
                <div className="bg-white shadow-md rounded-lg  p-4 w-full max-w-sm mx-auto flex flex-col items-center mb-4">
                    <img
                        src={params.data.avatar}
                        alt={`${params.data.name}'s avatar`}
                        className=" rounded-full mb-2 w-12 h-12"
                    />
                    <h2 className="text-lg font-semibold text-gray-800">{params.data.name}</h2>
                    <p className="text-gray-500 text-sm">📧 {params.data.mail}</p>
                    <p className="text-gray-500 text-sm">📞 {params.data.phone}</p>
                    <p className="text-gray-500 text-sm">📍 {params.data.place}</p>
                    <Link to={`/edit/${params.data.id}`} >
                    <button className='bg-gray-700 text-white  px-5 hover:bg-slate-800 py-0 mt-2'>Edit</button>
                </Link>
                </div>
            )
        }
    ];

    return (
        <div className="flex flex-col justify-start items-center gap-10 bg-custom-gradient w-full min-h-screen py-10">
            <h1 className="p-3 text-customDarkGreen text-2xl md:text-5xl font-semibold">Contacts List</h1>
            <div className="ag-theme-alpine w-4/6 md:block hidden">
                <AgGridReact
                    rowData={contacts}              // Ensure contacts is an array of data objects
                    columnDefs={columnDefsMD}          // Ensure columnDefs is an array of column definitions
                    pagination={true}                // Enable pagination
                    paginationPageSize={10}
                    domLayout="autoHeight"            // Set page size
                />
            </div>
            <div className="ag-theme-alpine md:hidden w-full h-full">
                <AgGridReact
                    rowData={contacts}           // Pass contacts data to rowData
                    columnDefs={columnDefs}       // Set column definitions for card layout
                    domLayout="autoHeight"        // Auto height for grid
                    pagination={true}             // Enable pagination
                    paginationPageSize={10}       // Number of cards per page
                    // suppressHorizontalScroll={true} // Hide horizontal scroll for card-like layout
                    rowHeight={270}
                    paginationPageSizeSelector ={false}

                    
                />
            </div>
        </div>
    );
}

export default Contacts;
