import React from 'react'
import TableRow from '@mui/material/TableRow';
import { TableCell } from '@mui/material';

const Customer = (props) => {
    return (
            <TableRow>
                <TableCell>({props.id})</TableCell>
                <TableCell><img src={props.image} alt=''/></TableCell>
                <TableCell><>{props.name}</></TableCell>
                <TableCell><>{props.birthday}</></TableCell>
                <TableCell><>{props.gender}</></TableCell>
                <TableCell><>{props.job}</></TableCell>
            </TableRow>
    )
}


export default Customer
