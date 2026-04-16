import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState([])


function ValidateForm() {
  let eroors = false;
  setError((error)=> [])
  if (!name) {
    setError((error) => [...error, "Name is Empty"]);
    errors = true;
  }
  if (!age) {
    setError((error) => [...error, "Age is Empty"]);
    errors = true;
  }
  if (!email) {
    setError((error) => [...error, "Email is Empty"]);
    errors = true;
  }
  if (!mobile) {
    setError((error) => [...error, "mobile is empty"])
    errors = true;
  }
  
}
  return (
    <>
    <form>
      <div>
        <h1>Student Details</h1>
      </div>
      <div id='about'>
        <label>Name</label>
        <input type="text" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)}></input><br></br>
        <label>Age</label>
        <input type="number" placeholder='enter your age in years' value={age} onChange={(e) => setAge(e.target.value)}></input><br></br>
        <label>Email</label>
        <input type="text" placeholder='enter your mail' value={email} onChange={(e) => setEmail(e.target.value)}></input><br></br>
        <label>Mobile Number</label>
        <input type="number" placeholder='enter your mobile number' value={mobile} onChange={(e) => setMobile(e.target.value)}></input>
      </div>
    
    <span>{error.join(", ")}</span>
    <button onClick={()=>(ValidateForm())}>Submit</button>
   </form>
    </>
  )
}

export default App;
