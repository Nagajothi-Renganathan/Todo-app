import React from 'react'
import { FaFilePen } from "react-icons/fa6";
import { AiFillDelete } from "react-icons/ai";
import { TfiFaceSad } from "react-icons/tfi";
import {useState} from 'react'
const ToDo = () => {
    const[input,setInput]=useState("");
    const[add,setAdd]=useState([]);
    const addClick = ()=> {
      if (input.trim() !== ""){
        setAdd([...add,input]);
        setInput('')
        // console.log(input)
      }
    }
    const clearData = (index) =>{
    let remove=add.filter((ele,indexItem)=>indexItem !== index)
    // console.log(index)
    setAdd(remove);

    }
  return (
    <div className='main'>
      <div className='center'>
        <h1>ToDo List <FaFilePen /></h1>
        <input type="text" placeholder='Add Your Task here....' value={input} onChange={(e)=>setInput(e.target.value)}/><br/>
        <button className="btn" onClick={addClick}>ADD</button>
        {
          add.length > 0 ?
          <ul>
            <p className='para'>Your ToDo's are</p>
            <div className='list-container'>
            {
              add.map((item,index) => {
                return(
                  <>
                  <li className='li' key={item.id}> {item} <AiFillDelete className='del-icon' onClick={()=>clearData( index)}/>
                  </li>
                  </>
                )
              })
            }
                 {/* <button className='clr-btn'>CLEAR ALL</button> */}
            </div>
          </ul>
          :<p className='para'>OOPS! Your list is empty <TfiFaceSad className='sad'/></p>
        }
        
      </div>
    </div>
  )
}

export default ToDo
