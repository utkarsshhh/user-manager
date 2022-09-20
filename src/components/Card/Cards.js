// import User from "../User/User"
// import { useState } from 'react'
// import User from '../User/User'
// import Users from '../Users/Users'
import './Cards.css'
// import User from './User/User';
// import Users from './Users/Users';


const Cards = (props) => {
    // const [usersList, setUsersList] = useState([])
    // const formSubmitHandler = (info) => {
    //     console.log(info)
    //     let userInfo = info
    //     userInfo['id'] = Math.random().toString()
    //     setUsersList((prevUsers)=> {
    //         return [...prevUsers,
    //             userInfo
    //         ]

    //     })
    // }

    return (
        <div className="new-expense">
            {props.children}
        </div>
    )

}

export default Cards