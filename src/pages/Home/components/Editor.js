import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { MdKeyboardArrowRight } from 'react-icons/md'
import authService from '../../../service/authService'
import dataService from '../../../service/dataService'
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../style.css'

const Editor = ({ data, target, setData }) => {

    const getTargetItem = (target) => {
        //console.log(data)
        const targetItem = data.find(item => item.id == target)
        if(targetItem) return targetItem
        else return {
            id: 0,
            title: '',
            content: ''
        }
    }

    const item = getTargetItem(target)

    const [title, setTitle] = useState('Default')
    const [content, setContent] = useState('default')

    useEffect(() => {
        setTitle(item.title)
        setContent(item.content)
    }, [item])

    const handleTitleChange = (e) => {
        console.log(e.target.value)
        setTitle(e.target.value)
    }

    const handleContentChange = (e) => {
        console.log(e.target.value)
        setContent(e.target.value)
    }

    const handleSaveClick = () => {
        dataService.updateArticle(item.id, title, content).then((res) => {
            toast.info('save success !')
            //window.location.reload(false);
        }).catch((err) => {
            alert('保存失敗, ' + err)
        });
    }

    const handleDeleteClick = () => {
        dataService.deleteArticle(item.id).then(res => {
            alert('刪除成功')
            window.location.reload(false);
        }).catch((err) => {
            alert('刪除失敗, ' + err)
        });
    }


    return (
        <div className="editor">
            <div className="tool-bar">
                <div>
                    <span className='badge'>title</span>
                    <input className='title' value={title} onChange={handleTitleChange}></input>
                </div>
                <div>
                    <button className='save' onClick={handleSaveClick}>save</button>
                    <button className='delete' onClick={handleDeleteClick}>delete</button>
                </div>
            </div>
            <div className='content'>
                <div className='edit-area'>
                    <p><MdKeyboardArrowRight style={{verticalAlign: 'middle'}}/>Editor</p>
                    <textarea className='text-area' value={content} onChange={handleContentChange}></textarea>
                </div>
                <div className='edit-view'>
                    <p><MdKeyboardArrowRight style={{verticalAlign: 'middle'}}/>Viewer</p>
                    <div className='view-area'>
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
                    </div>
                    
                </div>
            </div>

            <ToastContainer
                position="top-center"
                autoClose={3000}
                theme='dark'
                transition={Slide}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

        </div>
    )
    
}

export default Editor