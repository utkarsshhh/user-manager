
import Cards from '../Card/Cards'
import './Users.css'
function Users(props){
    // let userList = [{'id':1,'name':'Jason','age':24},{'id':2,'name':'Matt','age':25}]
    // console.log(userList.map((user) => (user.name)))
    // console.log(props.users, "  inside users.js")
    // props.updateUser()
    
    
    return (
        <Cards>
        <ul className='user-list' key= {props}>
            {props.userss.map((user) => (
                <div className='user-item' key= {user.id}>{user.name} ({user.age} years old)</div>
            ))}
        </ul>
        </Cards>
    )


}
export default Users