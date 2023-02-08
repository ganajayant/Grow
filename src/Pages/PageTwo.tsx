import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";
import { useEffect, useState } from "react";


interface Item {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'userId',
        headerName: 'User ID',
        width: 80,
        editable: true,
    },
    {
        field: 'title',
        headerName: 'Title',
        width: 200,
        editable: true,
    },
    {
        field: 'body',
        headerName: 'Body',
        width: 2000,
        editable: true,
    },
];
export default function PageTwo() {
    const [data, setData] = useState<Item[]>([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);
    return (
        <Box sx={{ height: '650px', width: '100%' }}>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
            />
        </Box>
    );
}