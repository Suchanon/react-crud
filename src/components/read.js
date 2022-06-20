
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';


export default function Read() {

  const setData = (data) => {
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('First Name', firstName);
    localStorage.setItem('Last Name', lastName);
    localStorage.setItem('Checkbox Value', checkbox)
  }

  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`https://62abdd92a62365888be173b9.mockapi.io/fakeData`)
      .then((response) => {
        setAPIData(response.data);
      })
  }, [])

  const onDelete = async (id) => {
   await axios.delete(`https://62abdd92a62365888be173b9.mockapi.io/fakeData/${id}`)
 
     await getData();

  }
  const getData = async () => {
  const getData = await axios.get(`https://62abdd92a62365888be173b9.mockapi.io/fakeData`)
         setAPIData(getData.data);
}
  return (

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Checked</TableCell>
            <TableCell>Update</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {APIData.map((e) => (
            <TableRow
              key={e.id}
            >
              <TableCell >{e.firstName}</TableCell>
              <TableCell >{e.lastName}</TableCell>
              <TableCell >{e.checkbox ? 'Checked' : 'Unchecked'}</TableCell>
              <TableCell >
                <Link to='/update'>
                  <button onClick={() => setData(e)}>Update</button>
                </Link>
              </TableCell>
              <TableCell>
                <button
                 onClick={() => onDelete(e.id)}
                >Delete</button>
              </TableCell>
            </TableRow>
          ))}

        </TableBody>
      </Table>
    </TableContainer>

  );
}
