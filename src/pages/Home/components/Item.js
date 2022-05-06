import moment from "moment"

const Item = ({ data, target, setTarget }) => {

    const handleClick = () => {
        setTarget(data.id)
    }

    return (
        <div>
            <div className={data.id == target ? "data-item-active" : "data-item"}>
                <div className="item-text">
                    <span className="title">{data.title}</span>
                    <span className="time">
                        last updated on  
                        {moment(data.updatedAt).format('YYYY-MM-DD HH:mm')}
                    </span>
                </div>
                
                <button className="button" value={data.id} onClick={handleClick}></button>
            </div>
        </div>
    )
}

export default Item