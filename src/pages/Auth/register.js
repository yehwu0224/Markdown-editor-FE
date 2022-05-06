import { useState } from 'react'
import { Link } from 'react-router-dom'
import authService from '../../service/authService'
import { MdPersonOutline, MdOutlineEmail, MdLockOutline } from 'react-icons/md'
import { createBrowserHistory } from "history";
import './style.css'
let history = createBrowserHistory()

const Register = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

    const handleUserChange = (e) => {
        setUsername(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePwdChange = (e) => {
        setPassword(e.target.value)
    }
    const handlePwd2Change = (e) => {
        setPassword2(e.target.value)
    }

    const handleSubmit = (e) => {
        //e.preventDefault()
        if (password2 == password) {
            authService.register(username, email, password)
            history.push('/login')
        }
    }

    return (
        <div className='App'>
            <span className='title'>Registration</span>
            <form onSubmit={handleSubmit}>
                <div className='input-field'>
                    <input type='text' 
                        placeholder='Enter your username'
                        value={username} 
                        onChange={handleUserChange}
                        required>
                    </input>
                    <MdPersonOutline className='icon'/>
                </div>
                <div className='input-field'>
                    <input type='text' 
                        placeholder='Enter your e-mail'
                        value={email} 
                        onChange={handleEmailChange}
                        required>
                    </input>
                    <MdOutlineEmail className='icon'/>
                </div>
                <div className='input-field'>
                    <input type='password' 
                        placeholder='Enter your password'
                        value={password} 
                        onChange={handlePwdChange}
                        required>
                    </input>
                    <MdLockOutline className='icon'/>
                </div>
                <div className='input-field'>
                    <input type='password' 
                        placeholder='Confirm your password'
                        value={password2} 
                        onChange={handlePwd2Change}
                        required>
                    </input>
                    <MdLockOutline className='icon'/>
                </div>

                <div className='input-field button'>
                    <input type='submit' value='Register'></input>
                </div>
                
                <div className='signup-field'>
                    <div> 
                        <span>Already have a member? </span> 
                        <Link to="/login">login now</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register