
import './App.css';
import {facebookProvider,githubProvider,googleProvider} from './config/authMethods';
import socialMediaAuth from './service/auth';
import { useState } from 'react';

function App() {
  const [data,setdata] = useState([]);
  
  const handleOnclick = async(provider)=>{
     const res = await socialMediaAuth(provider);
     console.log(res);
     setdata(res?.providerData[0]);
  }
  
  return (
    <div className="App">
      <h1>React Socialite Login</h1>
      <button onClick={()=>handleOnclick(facebookProvider)}>facebook</button><br/>
      <button onClick={()=>handleOnclick(githubProvider)}>github</button><br/>
      <button onClick={()=>handleOnclick(googleProvider)}>google</button><br/>
      <h1>Name:{data.displayName}</h1>
      <h1>Email:{data.email}</h1>
      <img src={data.photoURL} />
      
      
    </div>
  );
}

export default App;
