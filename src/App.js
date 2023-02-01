
import React,{useState} from 'react'


export default function   App() {
  const [Name, setName] = useState(" ");
  const [Email, setEmail] = useState(" ");
  const [Password, setPassword] = useState(" ");

  function handleName(e){
    console.log(Name,"  ");
     setName(e.target.value);
  }
 
  function handleEmail(f){
    console.log(Email,"  ");
     setEmail(f.target.value);
  }

  function handlePassword(g){
    console.log(Password,"  ");
     setPassword(g.target.value);
  }
  return (
    <div className="App" >
      <h1>FORM</h1>
     <form>
      <label>Name : <input type="text" onChange={handleName} /></label><br/><br/>
      <label>Email : <input type="email" onChange={handleEmail}/></label><br/><br/>
      <label>Password : <input type="number" onChange={handlePassword}/></label><br/><br/>
      <button>Submit</button>
     </form>
    </div>
  )
}



   




