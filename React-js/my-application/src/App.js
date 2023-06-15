
import './App.css';
// import { useState } from 'react';
// import Users from './Users';
// import Profile from './Profile';
// import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Members from './Members';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';


function App() {
  // const student = ['Rutvik', 'Rahul', 'Aditya', 'Meet'];
  const users = [
    { name: "Rutvik", email: "rutvik@gmail.com", address: [
      {Hn:"10",city:"Noida"}
    ] },
    { name: "Meet", email: "meet@gmail.com", contact: "999584648" },
    { name: "Rahul", email: "rahul@gmail.com", contact: "9995846748" },
    { name: "Aditya", email: "aditya@gmail.com", contact: "9995846748" }
  ]

  // const student = [
  //   { name: "Rutvik", email: "rutvik@gmail.com", contact: "9694946448" },
  //   { name: "Rahul", email: "rahul@gmail.com", contact: "989452448" },
  //   { name: "Aditya", email: "aditya@gmail.com", contact: "9995846748" }
  // ]

  // // map looping
  // student.map((item) => {
  //   console.log("My Name is:", item);
  // });

  // for (let i = 0; i < student.length; i++) {
  //   console.warn("In for loop My Name is:", student[i]) 
  // }


  // const [data, setData] = useState(null)
  // const [print, setPrint] = useState(false)

  // function getData(val) {
  // function getData() {
  // console.log("Added");
  // console.warn(val.target.value);
  // setData(val.target.value)
  // setPrint(false)
  // }
  // function increment() {
  //   setData(data+1)  
  // }
  // function decrement() {
  //   setData(data-1)  
  // }

  // const [name, setName] = useState("Rutvik");


  // const [name, setName] = useState("");
  // const [tnc, setTnc] = useState(false);
  // const [interest, setinterest] = useState("");
  // function getFormData(e) {
  //   e.preventDefault()
  //   console.log(name, interest, tnc);
  // }

  return (
    <div className="App">
      <h2>Handle Array with List</h2>
      <Table striped variant='dark'>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Contact</td>
          </tr>
          
          {
            users.map((item, i) =>
              item.contact === '9995846748' ?
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
              </tr>:null
            )
          }
        </tbody>
      </Table>


      {/* <table border={1} align='center'>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Contact</td>
        </tr>
        {
          student.map((data) =>
            <tr>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.contact}</td>
            </tr>
          )
        }
      </table> */}
      {/* <Button className='btn btn-warning'>Primary</Button>{' '} */}
      {/* <Users data={getData} /> */}
      {/* <Members data={getData} /> */}
      {/* <Members /> */}
      {/* {
        print ?
          <h1>{data}</h1>
          : null
      } */}
      {/* <button onClick={increment}>Click Me</button> */}
      {/* <button onClick={decrement}>Click Me</button> */}
      {/* <Users
      name={name} 
      age={10}
      email={"meet@gmail.com"}
      other={{address: 'khedbrahma', mobile: "5674964658"}}
      /> */}
      {/* <Profile /> */}
      {/* <Login /> */}
      {/* <button onClick={()=>{setName("meet")}}>Update Name</button> */}

      {/* <input type="text" onChange={getData} /> */}
      {/* <button onClick={() => setPrint(true)}>Print</button> */}

      {/* <div className='from'>
        <h1>Handle Form in React</h1>
        <form onSubmit={getFormData}>
          <input type='text' placeholder='Enter Name' onChange={(e) => setName(e.target.value)}/> 
          <br /><br />
          <select onChange={(e) => setinterest(e.target.value)}>
            <option>select</option>
            <option>Spider Man</option>
            <option>Iron Man</option>
            <option>Super Man</option>
          </select> 
          <br /><br />
          <input type='checkbox' onChange={(e) => setTnc(e.target.checked)} />
          <span>Accept Terms and conditions</span>
          <br /><br />
          <button type='submit'>Submit</button>
        </form>
      </div> */}
    </div >
  );
}

export default App;
