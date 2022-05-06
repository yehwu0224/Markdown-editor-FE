import { useState, useEffect } from "react"
import authService from "./service/authService"
import './App.css';
import { Navigate, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Auth/login';
import Register from './pages/Auth/register';

const App = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const currentUser = authService.getCurrentUser()
        const isExpired = authService.checkExpired()
        console.log(isExpired)
        console.log(currentUser)
        setUser(currentUser)
    },[])

    return (
        <div className="Container">
            <Routes>
                {!user && (
                    <>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </>
                )}
                {user && (
                    <Route path="/" element={<Home user={user} />} />
                )}

                <Route path="*" element={<Navigate to={user ? "/" : "/login"} />}></Route>
            </Routes>
        </div>
    )
}

export default App