
import { useState } from 'react';
import './App.css';
// import Cards from './components/Card/Cards';
import User from './components/User/User';
import Users from './components/Users/Users';

// import User from './components/User/User';

function App() {
  let userList = [{'id':'1','name':'Utkarsh','age':24}]
  const [usersList,setUsersList] = useState(userList)
  const onSubmitForm = (info) => {
    info['id'] = (usersList.length + 1).toString()
    setUsersList((prevState) => {
      return [...prevState,info]
    })
  }
  return (
    <div>
      <User submitForm = {onSubmitForm}/> 
      
      <Users userss = {usersList} />
    
    </div>
  );
}

export default App;
