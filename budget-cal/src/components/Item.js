import React from 'react'
import {MdEdit,MdDelete} from "react-icons/md"

const Item = ({expense}) => {
    console.log("here",expense)
    
    const {id,category,amount}=expense
    return (
       
        <li  className="item">
            <div className="info">
                <span className="expense">{category}</span>
                <span className="amount">{amount}</span>
            </div>
            <button className="edit-btn" >
             <MdEdit />   
            </button>
            <button className="delete-btn">
             <MdDelete />   
            </button>


        </li>
           
       
    )
}

export default Item
