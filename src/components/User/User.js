import { useState } from 'react';
import Cards from '../Card/Cards';
import ErrorModal from '../ErrorModal';
import './User.css'
function User(props) {
    const [formInput, setFormInput] = useState({ 'name': '', 'age': '' })
    const [errMsg1,setErrMsg1] = useState("")
    const [errState,setErrState] = useState(false)
    const resetError = () =>{
        setFormInput({ 'name': '', 'age': '' })
        setErrMsg1("")
        setErrState(false)
    }
    const AddUser = (event) => {
        event.preventDefault();
        setFormInput(formInput)
        // console.log(event.target.value)
        if (formInput['name'].trim().length>0 && formInput['age']>0){
            props.submitForm(formInput)
            setErrState(false)
        }
        else if (formInput['name'].trim().length===0 || formInput['age'].trim().length===0){
                setErrMsg1("The value of name or age cannot be empty")
                setErrState(true)
        }
        else if (formInput['age']<=0){
            setErrMsg1("The value of age cannot be 0 or negative")
            setErrState(true)
        }

        
        setFormInput({'name': '', 'age': '' })

    }
    const nameChangeHandler = (event) => {
        console.log(event.target.value)
        setFormInput((prevState) => {
            return {
                ...prevState,
                name: event.target.value

            }
        })
    }
    const ageChangeHandler = (event) => {
        console.log(event.target.value)
        setFormInput((prevState) => {
            return {
                ...prevState,
                age: event.target.value

            }
        })
    }

    return (
        <div>

        {errState && <ErrorModal title = "An error occured!" message = {errMsg1} resetForm = {resetError}></ErrorModal>}
        {!errState && <Cards>
        <form onSubmit={AddUser}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>

                    <label>
                        Username
                    </label>
                    <input id='name' value={formInput['name']} onChange={nameChangeHandler} />
                    <br />
                    <label>
                        Age (Years)
                    </label>
                    <input type='number' id='age' value = {formInput['age']} onChange={ageChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="submit" className='new-expense__button'>Add User</button>
            </div>

        </form>
        </Cards>}
        </div>

    )
}
export default User