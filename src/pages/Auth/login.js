import { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import authService from '../../service/authService';
import { MdOutlineEmail, MdLockOutline } from 'react-icons/md'
import './style.css'
import { createBrowserHistory } from "history";
//let history = createBrowserHistory();
const user = JSON.parse(localStorage.getItem('user'))

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePwdChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await authService.login(email, password).then((res) => {console.log(res)})
        navigate('/')
        window.location.reload(true);
    }

    return (
        <div className='App'>
            <span className='title'>Login</span>
            <form onSubmit={handleSubmit}>
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
                <div className='checkbox-text'>
                    <div>
                        <input type='checkbox' id='log'></input>
                        <label htmlFor='log'> Remember me</label>
                    </div>
                    
                    <div>Forgot password?</div>
                </div>

                <div className='input-field button'>
                    <input type='submit' value='Login now'></input>
                </div>
                
                <div className='signup-field'>
                    <div> <span>Not a member? </span> <Link to="/register">signup now</Link></div>
                </div>
            </form>
        </div>
    )
}

export default Login