import '../style.css';
import React, { useState } from 'react';
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField';
import TodoTable from './TodoTable';

const TodoList = () => {
  const [showtable, setshowtable] = useState(false)
  const [arr, setarr] = useState([])
  const [showbtn, setshowbtn] = useState(false)
  const [indexvalu, setindexvalue] = useState(0)
  const [userData, setUserData] = useState({
    sname: "",
    age: "",
    gender: "",
    phone: "",
    location: "",
  })
//   are bhai git hub

  const handelDetails = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  const handelsubmitdata = () => {
    setarr([...arr, userData])
    setshowtable(true)
    setUserData({
      sname: "",
      age: "",
      gender: "",
      phone: "",
      location: "",
    })
  }

  const handelupdate = () => {
    arr.splice(indexvalu, 1, userData)
    setarr([...arr])
    setshowbtn(false)
    setUserData({
      sname: "",
      age: "",
      gender: "",
      phone: "",
      location: "",
    })
  }
//   arrrr chalo

  return (
    <>
      <div className='main-todo'>
        <div>
          <li className='todo-li'>
            <TextField id="demo-helper-text-misaligned-no-helper" style={{backgroundColor:"whitesmoke"}} className='inputes' label="Name" value={userData.sname} name='sname' onChange={handelDetails} />
          </li>
        </div>
        <div>
          <li className='todo-li'>
            <TextField id="demo-helper-text-misaligned-no-helper" style={{backgroundColor:"whitesmoke"}}  className='inputes' label="Age" value={userData.age} name='age' onChange={handelDetails} />
          </li>
        </div>
        <div>
          <li className='todo-li'>
            <TextField id="demo-helper-text-misaligned-no-helper" style={{backgroundColor:"whitesmoke"}} label="Gender" value={userData.gender} name='gender' onChange={handelDetails} />
          </li>
        </div>
        <div>
          <li className='todo-li'>
            <TextField id="demo-helper-text-misaligned-no-helper" style={{backgroundColor:"whitesmoke"}} label="Phone" value={userData.phone} name='phone' onChange={handelDetails} />
          </li>
        </div>
        <div>
          <li className='todo-li'>
            <TextField id="demo-helper-text-misaligned-no-helper" style={{backgroundColor:"whitesmoke"}} label="Location" value={userData.location} name='location' onChange={handelDetails} />
          </li>
        </div>
        <div className='todo-li'>
          {showbtn === false ? <Button variant="contained" color="success" onClick={() => handelsubmitdata()}>
            Submit
          </Button> : <Button variant="contained" style={{backgroundColor:"primery"}} onClick={() => handelupdate()}>
            Update
          </Button>}
        </div>
      </div>
      {
        showtable === true ? <TodoTable arr={arr} setarr={setarr} setUserData={setUserData} indexvalue={setindexvalue} userData={userData} setshowbtn={setshowbtn} handelupdate={handelupdate} /> : null
      }

    </>
  );
}

export default TodoList;
