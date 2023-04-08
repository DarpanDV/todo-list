import React, { useState } from 'react'

const Todo = () => {
    const [txt, SetTxt] = useState(" ");
    const [item, setItem] = useState([]);
    const changetxt = (e) => {
        SetTxt(e.target.value);
    }
    const addlist = () => {
        setItem((oldval) => {
            return [...oldval, txt];
        })
        SetTxt("")
    }
    const deleteItems=(index)=>{
       item.map((e,id)=>{
        if(id===index)
        item.splice(id,1);
       })
       setItem((oldval)=>{
        return [...oldval];
       })
    }
    const deleteAll=()=>{
        setItem([]);
    }
    return (
        <div className='main-div-todo'>

            <div className='centre-div-todo'>
                <h1 className='Heading-todo'>ToDo List</h1>
                <input className='txt-div' type='text' value={txt} onChange={changetxt} placeholder='ENTER THE TEXT' />
                <button onClick={addlist}><i className="material-icons">&#xe862;</i></button>
                <div className='list-beutify'>
                <ol>
                    {
                        item.map((eve, index) => {
                            return(
                            <>
                             <button onClick={()=>deleteItems(index)}>click me</button>
                             <li key={index}>{eve}</li>
                            </>
                        )})
                    }
                </ol>
                </div>
                <button onClick={deleteAll}>DeleteAll</button>
            </div>

        </div>
    )
}

export default Todo
