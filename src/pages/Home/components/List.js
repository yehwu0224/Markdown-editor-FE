import { useEffect, useState } from "react"
import '../style.css'
import Item from "./Item"

const List = ({ data, target, setTarget }) => {

    return (
        <div className="data-list">
            {
                data?.map((item) => {
                    return (
                        <Item data={item} target={target} setTarget={setTarget}></Item>
                    )
                })
            }
        </div>
    )
}

export default List