import { Button, TableCell } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const TodoTable = ({ arr , setarr , setUserData , setshowbtn ,indexvalue}) => {
  
  const handeldelete = (index) => {
    const newarr = [...arr];
    newarr.splice(index,1)
    setarr([...newarr]) 
  }

  const handeledit = (index)=>{
    setUserData(arr[index])
    setshowbtn(true)
    indexvalue(index)
  }
  

  return (
    <div>
      {arr.length === "" ? null : <TableContainer component={Paper}>
        <Table style={{backgroundColor:"cyan"}} sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Location</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          {arr.map((item, index) => {
            return (
              <>
                <TableBody>
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={index} >
                    <TableCell component="th" scope="row" >{item.sname}</TableCell>
                    <TableCell>{item.age}</TableCell>
                    <TableCell>{item.gender}</TableCell>
                    <TableCell>{item.phone}</TableCell>
                    <TableCell>{item.location}</TableCell>
                    <TableCell>
                      <Button variant="contained" style={{backgroundColor:"orange"}} onClick={()=>handeledit(index)}>
                        EDIT
                      </Button>&nbsp; &nbsp;
                      <Button variant="contained" style={{backgroundColor:"red"}} onClick={() => handeldelete(index)}><DeleteForeverIcon></DeleteForeverIcon>
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </>
            )
          })}
        </Table>
      </TableContainer>}
    </div>
  );
}

export default TodoTable;

