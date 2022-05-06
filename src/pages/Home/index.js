import { useEffect, useLayoutEffect, useState } from 'react'
import axios from 'axios'
import dataService from '../../service/dataService'
import icon from '../../image/icon.jpeg'
import { BiMessageSquareAdd, BiDotsHorizontalRounded } from 'react-icons/bi'
import './style.css'
import List from './components/List'
import Editor from './components/Editor'
import authService from '../../service/authService'

const Home = ({ user }) => {
    const [data, setData] = useState([{
            id: 0,
            title: '',
            content: ''
    }])
    const [target, setTarget] = useState(0)

    const postData = () => {
        dataService.addArticle('newPost', '## default')
        window.location.reload(false);
        alert('新增成功')
    }

    const handleLogout = () => {
        authService.logout()
        window.location.reload(true)
    }

    useEffect( async () => {
        await dataService.getArticles().then((listdata) => {
            setData(listdata)
            setTarget(listdata[0].id)
        }) 
    }, [])


    return (
        <div className='container'>
            <nav className='sidebar'>
                <header>
                    <div className='header-image'>
                        <img src={icon}></img>
                    </div>

                    <div className='header-text'>
                        <span className='username'>{user.username}</span>
                        <span className='email'>{user.email}</span>
                    </div>

                    <div className='header-tool'>
                        <BiDotsHorizontalRounded size={20} onClick={handleLogout}/>
                    </div>
                </header>

                <div className='post-btn'>
                    <button className='btn' onClick={postData}>
                        <BiMessageSquareAdd size={18} className='btn-icon'/>
                        New post
                    </button>
                </div>

                <div>Article list</div>
                <List data={data} target={target} setTarget={setTarget}></List>
            </nav>

            <Editor data={data} target={target} setData={setData}></Editor>
        </div>
    )
}

export default Home